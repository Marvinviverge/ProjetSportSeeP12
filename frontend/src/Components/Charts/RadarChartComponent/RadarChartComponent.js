import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import './RadarChartComponent.css'

const RadarChartComponent = ({ data }) => {

    return (
        <div className='RadarChartComponent'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="55%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tickLine={false} stroke={'#fff'} fontSize={10} strokeWidth={0.5} />
                    <PolarRadiusAxis axisLine={false} tick={false} />
                    <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarChartComponent;