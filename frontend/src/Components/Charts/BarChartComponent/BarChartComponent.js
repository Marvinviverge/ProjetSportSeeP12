import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './BarChartComponent.css'

const BarChartComponent = ({ data }) => {
    return (
        <div className='BarChartComponent'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis />
                    <YAxis yAxisId="left" orientation="right" stroke="#8884d8" domain={['dataMin -2', 'dataMax + 2']} />
                    <YAxis yAxisId="right" orientation="left" stroke="#82ca9d" hide={true} />
                    <Tooltip />
                    <Legend verticalAlign='top' align='center' margin={{ top: 100, left: 200, right: 50, bottom: 50 }} />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="calories" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;