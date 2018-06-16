import React from 'react';
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const YearChart = ({
  data
}) => {
  return (
    <div>
      <LineChart width={800} height={350} data={data}
        margin={{top: 0, right: 30, left: 10, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="แรงงาน" stroke="#FFBB28" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="ผู้ติดตาม" stroke="#8884e8" />
      </LineChart>
    </div>
  )
}

YearChart.propTypes = {
  path: PropTypes.string,
}

export default YearChart;