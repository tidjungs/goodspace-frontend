import React from 'react';
import PropTypes from 'prop-types'
import { PieChart, Pie, Tooltip } from 'recharts';

const NationalChart = ({
  data
}) => {
  return (
    <div>
      <PieChart width={800} height={300} margin={{left:-200}}>
        <Pie isAnimationActive={true} data={data} outerRadius={120} fill="#9370DB" label/>
        <Tooltip/>
    </PieChart>
    </div>
  )
}

NationalChart.propTypes = {
  path: PropTypes.string,
}

export default NationalChart;