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
        <Bar dataKey="พม่า" stackId="a" fill="#8884e8" />
        <Bar dataKey="ลาว" stackId="a" fill="#00C49F" />
        <Bar dataKey="กัมพูชา" stackId="a" fill="#FFBB28" />
        <Bar dataKey="เวียดนาม" stackId="a" fill="#FF8042" />
      </BarChart>
    </div>
  )
}

AreaChart.propTypes = {
  path: PropTypes.string,
}

export default AreaChart;