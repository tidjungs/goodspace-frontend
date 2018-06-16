import React, { Component } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts'
import { Grid } from 'semantic-ui-react'

class Dashboard extends Component {
  render() {
    const dataPie = [{name: 'พม่า', value: 487}, {name: 'กัมพูชา', value: 295},
                     {name: 'ลาว', value: 321}, {name: 'เวียดนาม', value: 273}], 
          dataBar = [
                    {name: 'เขตบางรัก', พม่า: 62, ลาว: 33, กัมพูชา: 12, เวียดนาม: 43},
                    {name: 'เขตจตุจักร', พม่า: 30, ลาว: 45, กัมพูชา: 36, เวียดนาม: 56},
                    {name: 'เขตพญาไท', พม่า: 66, ลาว: 62, กัมพูชา: 42, เวียดนาม: 25},
                    {name: 'เขตบางนา', พม่า: 54, ลาว: 32, กัมพูชา: 21, เวียดนาม: 74},
                    {name: 'เขตราชเทวี', พม่า: 89, ลาว: 46, กัมพูชา: 19, เวียดนาม: 32},
                    {name: 'เขตดินแดง', พม่า: 24, ลาว: 66, กัมพูชา: 32, เวียดนาม: 45},
                    {name: 'เขตหลักสี่', พม่า: 72, ลาว: 51, กัมพูชา: 54, เวียดนาม: 33},
                  ],
          dataLine = [
                    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
                  ],
          COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
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
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <PieChart width={800} height={350} margin={{left:-10}}>
                <Pie isAnimationActive={true} data={dataPie} outerRadius={120} fill="#c266ff" label/>
                <Tooltip/>
              </PieChart>
            </Grid.Column>
            <Grid.Column>
              <BarChart width={600} height={350} data={dataBar}
                margin={{top: 50, right: 30, left: 20, bottom: 0}}>
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
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <LineChart width={800} height={350} data={dataLine}
                        margin={{top: 50, right: 30, left: 50, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Grid.Column>
            <Grid.Column>
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={dataPie} 
                  cx={300} 
                  cy={200} 
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80} 
                  fill="#8884d8">
                  {
                    dataPie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
              </PieChart>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
