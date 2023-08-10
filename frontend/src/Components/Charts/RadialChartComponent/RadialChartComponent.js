import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

import './RadialChartComponent.css'

const legendScore = () => {
  return <h3 className="legendScore">Score</h3>
}
const RadialChartComponent = ({ data }) => {

  let newData = [{ todayScore: data.todayScore, fill: '#ff0101' }]

  return (
    <div className='RadialChartComponent'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart startAngle={90} endAngle={450} innerRadius={70} outerRadius={260} cy="55%" barSize={9} data={newData}>
          <circle cx="50%" cy="55%" fill="white" r="65"></circle>
          <PolarAngleAxis type="number" fill="#ff0101" domain={[0, 100]} tick={false} angleAxisId={0} axisLineType="circle" />
          <RadialBar cornerRadius="10" dataKey="todayScore" />
          <text fontWeight="700" fontSize={26} fill="#282D30" x="50%" y="50%" textAnchor="middle">
            {data.todayScore}%
          </text>
          <text fontSize="16" fontWeight="500" fill="#74798C" x="50%" y="60%" textAnchor="middle">
            de votre
          </text>
          <text fontSize="16" fontWeight="500" fill="#74798C" x="50%" y="70%" textAnchor="middle">
            objectif
          </text>
          <Legend content={legendScore} align="left" verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadialChartComponent;