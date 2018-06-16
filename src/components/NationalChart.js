import React from 'react';
import PropTypes from 'prop-types'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#8884e8', '#00C49F', '#FFBB28', '#FF8042'];

const NationalChart = ({
  data
}) => {
  return (
    <div>
      <PieChart width={800} height={300} margin={{left:-200}}>
        <Pie isAnimationActive={true} data={data} outerRadius={120} fill="#FF8042" label>
          {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip/>
    </PieChart>
    </div>
  )
}

NationalChart.propTypes = {
  path: PropTypes.string,
}

export default NationalChart;