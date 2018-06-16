import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts'
import { Grid } from 'semantic-ui-react'

class Dashboard extends Component {
  render() {
    const dataPie = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}], 
          dataBar = [
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
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={dataPie} 
                  cx={300} 
                  cy={200} 
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80} 
                  fill="#8884d8">
                  {
                    dataPie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
              </PieChart>
            </Grid.Column>
            <Grid.Column>
              <BarChart width={600} height={300} data={dataBar}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <BarChart width={600} height={300} data={dataBar}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </Grid.Column>
            <Grid.Column>
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={dataPie} 
                  cx={300} 
                  cy={200} 
                  labelLine={false}
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
