import React from 'react';

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Rectangle, Tooltip, } from 'recharts';

import './LineChartComponent.css'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltipLine">
                <p className="label">{`${payload[0].value}min`}</p>
            </div>
        )
    }
    return null
}

function CustomizedCursor({ points }) {
    return (
        <Rectangle fill="black" opacity={0.1} x={points[0].x} width={250} height={250} />
    )
}

const LineChartComponent = ({ data }) => {
    return (
        <div className='LineChartComponent'>
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{ stroke: 'red', strokeOpacity: 0.7, strokeWidth: 2, r: 5, }} opacity={0.8} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} opacity={0.5} style={{ transform: 'scaleX(0.95)', transformOrigin: 'bottom', fontSize: '12px', stroke: 'white', }} padding={{ left: -3, right: -3 }} interval={'preserveStartEnd'} />
                    <YAxis hide={true} padding={{ top: 70, bottom: 30 }} domain={['dataMin', 'dataMax']} />
                    <Tooltip content={CustomTooltip} cursor={<CustomizedCursor />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;