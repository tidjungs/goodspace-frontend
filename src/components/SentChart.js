import React from 'react';
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell } from 'recharts';

const SentChart = ({
  data
}) => {
  const COLORS = ['#6600cc', '#d9b3ff'],
        RADIAN = Math.PI / 180,
        renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x  = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy  + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        };
  return (
    <div>
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={250} 
          cy={150} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150} 
          fill="#8884d8">
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </div>
  )
}

SentChart.propTypes = {
  path: PropTypes.string,
}

export default SentChart;