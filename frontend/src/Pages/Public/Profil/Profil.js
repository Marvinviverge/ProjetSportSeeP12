import React, { useEffect, useState } from 'react';
import DataService from '@/_Services/data.service.js';
import MockService from '@/_Services/mock.service.js';

import { useParams } from 'react-router-dom'

import Nutrients from '@/Components/Nutrients/Nutrients';
import Title from '@/Components/Title/Title';

import BarChartComponent from '@/Components/Charts/BarChartComponent/BarChartComponent.js';
import RadialChartComponent from '@/Components/Charts/RadialChartComponent/RadialChartComponent.js';
import RadarChartComponent from '@/Components/Charts/RadarChartComponent/RadarChartComponent.js';
import LineChartComponent from '@/Components/Charts/LineChartComponent/LineChartComponent.js';

import './Profil.css'

const Profil = () => {

    const { userId } = useParams()
    const currentUserId = Number(userId)

    let [Alldata, setAlldata] = useState({})
    let [waiting, setwaiting] = useState(true)
    let [errorAPI, setErrorAPI] = useState(false)
    let [error, setError] = useState(false)

    const callError = () => {
        setError(true)
        setErrorAPI(false)
    }

    const callMock = async () => {
        const dataPerformanceMock = await MockService.GetPerformanceMock(currentUserId)
        const dataMainMock = await MockService.GetMaindataMock(currentUserId)
        const dataSessionMock = await MockService.GetSessionsMock(currentUserId)
        const dataActivityMock = await MockService.GetActivityMock(currentUserId)

        let AlldataMock = {
            dataPerformance: dataPerformanceMock,
            dataSession: dataSessionMock,
            dataActivity: dataActivityMock,
            dataMain: dataMainMock
        }
        setAlldata(AlldataMock)
        setErrorAPI(false)
    }

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [])

    const getInfo = async () => {
        const dataPerformance = await DataService.GetPerformance(currentUserId)
        if (!dataPerformance) {
            setErrorAPI(true)
            setwaiting(false)
        } else {
            const dataMain = await DataService.GetMaindata(currentUserId)
            const dataSession = await DataService.GetSessions(currentUserId)
            const dataActivity = await DataService.GetActivity(currentUserId)

            if ((dataPerformance || dataMain || dataSession || dataActivity) === undefined) {
                setErrorAPI(true)
                setwaiting(false)
            } else {
                let NewAlldata = {
                    dataPerformance: dataPerformance,
                    dataSession: dataSession,
                    dataActivity: dataActivity,
                    dataMain: dataMain
                }
                setAlldata(NewAlldata)
                setwaiting(false)
            }
        }

    }

    if (waiting) return (<h3>Chargement...</h3>)

    if (errorAPI) return (
        <div className='errorAPI'>
            <p>
                Attention ! Une erreur est survenue lors de l'appel à l'API. Voulez-vous utiliser les données du MOCK ?
            </p>
            <div className='errorButtons'>
                <button onClick={callMock}>Oui</button>
                <button onClick={callError}>Non</button>
            </div>
        </div>
    )

    if (error) return (
        <div className='errorFromAPI'>
            <p>Une erreur est survenue lors de l'appel à l'API.</p>
        </div>
    )

    return (
        <section className='profil'>
            <Title data={Alldata.dataMain} />
            <div className='userDatas'>
                <div className='charts'>
                    <BarChartComponent data={Alldata.dataActivity.dataModel} />
                    <div className='smallCharts'>
                        <LineChartComponent data={Alldata.dataSession.dataModel} />
                        <RadarChartComponent data={Alldata.dataPerformance.dataModel} />
                        <RadialChartComponent data={Alldata.dataMain} />
                    </div>
                </div>
                <div className='nutrientsDetails'>
                    <Nutrients data={Alldata.dataMain.keyData} />
                </div>
            </div>
        </section>
    )
};

export default Profil;