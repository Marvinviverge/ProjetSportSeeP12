import React from 'react';
import DataService from '@/_Services/data.service';

import './Home.css'

import Nutrients from '@/Components/Nutrients/Nutrients';
import Title from '@/Components/Title/Title';
import BarChartComponent from '@/Components/Charts/BarChartComponent/BarChartComponent.js';
import RadialChartComponent from '@/Components/Charts/RadialChartComponent/RadialChartComponent.js';
import RadarChartComponent from '@/Components/Charts/RadarChartComponent/RadarChartComponent.js';
import LineChartComponent from '@/Components/Charts/LineChartComponent/LineChartComponent.js';

const Home = ({ setTypeData }) => {

    const dataPerformance = DataService.GetAllPerformance()
    const dataScore = DataService.GetAllMaindata()
    const dataSession = DataService.GetAllSessions()
    const dataActivity = DataService.GetAllActivity()

    return (
        <section className='home'>
            <div className="typeData">
                <h2>Choix du type de données : </h2>
                <div className="typeData_Btns">
                    <button className="btn" onClick={() => { setTypeData(false) }}> MOCK </button>
                    <button className="btn" onClick={() => { setTypeData(true) }}> API </button>
                </div>
            </div>
            <Title />
            <div className='userDatas'>
                <div className='charts'>
                    <BarChartComponent data={dataActivity.dataModel} />
                    <div className='smallCharts'>
                        <LineChartComponent data={dataSession.dataModel} />
                        <RadarChartComponent data={dataPerformance} />
                        <RadialChartComponent data={dataScore} />
                    </div>
                </div>
                <div className='nutrientsDetails'>
                    <Nutrients />
                </div>
            </div>
        </section>
    );
};

export default Home;