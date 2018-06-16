import React from 'react';
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const AreaChart = ({
  data
}) => {
  return (
    <div>
      <BarChart width={700} height={300} data={data}
        margin={{top: 30, right: 30, left: 20, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="พม่า" stackId="a" fill="#c266ff" />
        <Bar dataKey="ลาว" stackId="a" fill="#6600cc" />
        <Bar dataKey="กัมพูชา" stackId="a" fill="#d9b3ff" />
        <Bar dataKey="เวียดนาม" stackId="a" fill="#8000ff" />
      </BarChart>
    </div>
  )
}

AreaChart.propTypes = {
  path: PropTypes.string,
}

export default AreaChart;