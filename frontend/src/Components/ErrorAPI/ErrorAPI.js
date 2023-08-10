import React, { useEffect, useState } from 'react';
import MockService from '@/_Services/mock.service.js';
import { useParams } from 'react-router-dom';


import Nutrients from '@/Components/Nutrients/Nutrients';
import Title from '@/Components/Title/Title';

import BarChartComponent from '@/Components/Charts/BarChartComponent/BarChartComponent.js';
import RadialChartComponent from '@/Components/Charts/RadialChartComponent/RadialChartComponent.js';
import RadarChartComponent from '@/Components/Charts/RadarChartComponent/RadarChartComponent.js';
import LineChartComponent from '@/Components/Charts/LineChartComponent/LineChartComponent.js';

import('./ErrorAPI.css')
const ErrorAPI = () => {
    const { userId } = useParams()
    const currentUserId = Number(userId)

    let [Alldata, setAlldata] = useState({})
    let [error, setError] = useState(false)
    let [mock, setMock] = useState(false)

    let callError = () => {
        setError(true)
    }

    let callMock = () => {
        setMock(true)
    }
    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [])

    const getInfo = async () => {
        const dataPerformance = await MockService.GetPerformanceMock(currentUserId)
        const dataMain = await MockService.GetMaindataMock(currentUserId)
        const dataSession = await MockService.GetSessionsMock(currentUserId)
        const dataActivity = await MockService.GetActivityMock(currentUserId)

        let Alldata = {
            dataPerformance: dataPerformance,
            dataSession: dataSession,
            dataActivity: dataActivity,
            dataMain: dataMain
        }
        setAlldata(Alldata)
    }
    if (error) return (

        <div className='errorFromAPI'>
            <p>Une erreur est survenue lors de l'appel à l'API.</p>
        </div>

    )

    if (mock) return (
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

    return (
        <div className='errorAPI'>
            <p>
                Attention ! Une erreur est survenue lors de l'appel à l'API. Voulez-vous utiliser les données du MOCK ?
            </p>
            <button onClick={callMock}>Oui</button>
            <button onClick={callError}>Non</button>
        </div>
    );
};

export default ErrorAPI;