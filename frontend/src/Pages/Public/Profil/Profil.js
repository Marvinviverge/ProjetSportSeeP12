import React, { useEffect, useState } from 'react';
import DataService from '@/_Services/data.service.js';

import { useParams } from 'react-router-dom'

import Nutrients from '@/Components/Nutrients/Nutrients';
import Title from '@/Components/Title/Title';

import BarChartComponent from '@/Components/Charts/BarChartComponent/BarChartComponent.js';
import RadialChartComponent from '@/Components/Charts/RadialChartComponent/RadialChartComponent.js';
import RadarChartComponent from '@/Components/Charts/RadarChartComponent/RadarChartComponent.js';
import LineChartComponent from '@/Components/Charts/LineChartComponent/LineChartComponent.js';
import ErrorAPI from '@/Components/ErrorAPI/ErrorAPI';

import './Profil.css'

const Profil = () => {

    const { userId } = useParams()
    const currentUserId = Number(userId)

    let [Alldata, setAlldata] = useState({})
    let [waiting, setwaiting] = useState(true)
    let [errorAPI, setErrorAPI] = useState(false)


    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [])

    const getInfo = async () => {
        const dataPerformance = await DataService.GetPerformance(currentUserId)
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

    if (waiting) return (<h3>Chargement...</h3>)
    if (errorAPI) return (<ErrorAPI />)
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