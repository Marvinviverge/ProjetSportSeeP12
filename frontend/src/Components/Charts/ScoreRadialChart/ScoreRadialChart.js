import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

import './ScoreRadialChart.css'
const legendScore = () => {
  return <h3 className="legendScore">Score</h3>
}
const ScoreRadialChart = (dataScore) => {

  const radialData = dataScore.data.map(item => {
    return {
      name: `${item.userInfos.firstName} ${item.userInfos.lastName}`,
      score: item.todayScore ? item.todayScore * 100 : item.score * 100
    };
  });


  return (
    <div className='scoreRadialChart'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart startAngle={90}
          endAngle={450}
          outerRadius={300}
          innerRadius={80}
          barSize={9}
          fill="#ff0000"
          data={radialData}>
          <circle cx="50%" cy="50%" fill="white" r="75"></circle>
          <PolarAngleAxis
            type="number"
            fill="#ff0000"
            domain={[0, 100]}
            tick={false}
            angleAxisId={0}
            axisLineType="circle"
          />
          <RadialBar
            cornerRadius="10" dataKey="score"
          />
          <text
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="48%"
            textAnchor="middle"
          >
            {radialData.score}%
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="60%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontSize="16"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="70%"
            textAnchor="middle"
          >
            objectif
          </text>
          <Legend content={legendScore} align="left" verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreRadialChart;