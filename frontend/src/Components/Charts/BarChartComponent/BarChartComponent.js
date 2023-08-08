import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import OvalBlack from '@/Assets/images/Ovalblack.svg'
import OvalRed from '@/Assets/images/Ovalred.svg'

import './BarChartComponent.css'

const BarChartComponentHeader = () => {
    return (
        <div className="BarChartComponentHeader">
            <h3>Activité quotidienne</h3>
            <div className="legend">
                <div className="legendContent">
                    <div>
                        <img src={OvalBlack} alt="cercle noir" />
                    </div>
                    <div className="legendDescription">Poids (kg)</div>
                </div>
                <div className="legendContent">
                    <div>
                        <img src={OvalRed} alt="cercle rouge" />
                    </div>
                    <div className="legendDescription">Calories brûlées (kCal)</div>
                </div>
            </div>
        </div>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <p className="label">{`${payload[0].value}kg`}</p>
                <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }
    return null
}

const BarChartComponent = ({ data }) => {
    return (
        <div className='BarChartComponent'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    barGap={10}
                    barSize={10}
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <Legend content={BarChartComponentHeader} verticalAlign='top' />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        padding={{ left: -47, right: -47 }}
                        tickLine={false}
                        tickMargin={10}
                        tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }} />
                    <YAxis yAxisId="kilogram" orientation="right" domain={['dataMin-1', 'dataMax']} tickLine={false}
                        tickMargin={20} axisLine={false} tickCount={3} tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }} />
                    <YAxis yAxisId="calories" orientation="left" hide={true} />
                    <Tooltip content={CustomTooltip} cursor={{ opacity: 0.6 }}
                        wrapperStyle={{ outlineStyle: 'none' }} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#000" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;