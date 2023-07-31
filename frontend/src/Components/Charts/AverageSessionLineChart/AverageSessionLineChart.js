import React from 'react';

import {
    LineChart, Line, ResponsiveContainer, XAxis,
    YAxis,
} from 'recharts';

import './AverageSessionLineChart.css'



const AverageSessionLineChart = ({ data }) => {

    return (
        <div className='averageSessionLineChart'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="white"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: 'red',
                            strokeOpacity: 0.7,
                            strokeWidth: 6,
                            r: 8,
                        }}
                        opacity={0.5}
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        opacity={0.5}
                        style={{
                            transform: 'scaleX(0.9)',
                            transformOrigin: 'bottom',
                            fontSize: '12px',
                            stroke: 'white',
                        }}
                        padding={{ left: -3, right: -3 }}
                        interval={'preserveStartEnd'}
                    />
                    <YAxis
                        hide={true}
                        padding={{ top: 40, bottom: 0 }}
                        domain={['dataMin-10', 'dataMax-10']}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessionLineChart;