import React from 'react';
import DataService from '@/_Services/data.service';

import './Home.css'
import PerformanceRadarChart from '@/Components/Charts/PerformanceRadarChart/PerformanceRadarChart.js';
import ScoreRadialChart from '@/Components/Charts/ScoreRadialChart/ScoreRadialChart';
import AverageSessionLineChart from '@/Components/Charts/AverageSessionLineChart/AverageSessionLineChart';
import ActivityBarChart from '@/Components/Charts/ActivityBarChart/ActivityBarChart';
import Nutrients from '@/Components/Nutrients/Nutrients';
import Title from '@/Components/Title/Title';

const Home = () => {

    const dataPerformance = DataService.GetAllPerformance()
    const dataScore = DataService.GetAllMaindata()
    const dataSession = DataService.GetAllSessions()
    const dataActivity = DataService.GetAllActivity()

    return (
        <section className='home'>
            <Title />
            <div className='userDatas'>
                <div className='charts'>
                    <ActivityBarChart data={dataActivity.dataModel} />
                    <div className='smallCharts'>
                        <AverageSessionLineChart data={dataSession.dataModel} />
                        <PerformanceRadarChart data={dataPerformance} />
                        <ScoreRadialChart data={dataScore} />
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