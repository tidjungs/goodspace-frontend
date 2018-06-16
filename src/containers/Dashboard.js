import React, { Component } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts'
import { Grid, Message } from 'semantic-ui-react'

class Dashboard extends Component {
  render() {
    const dataPie = [{name: 'พม่า', value: 487}, {name: 'กัมพูชา', value: 295},
                     {name: 'ลาว', value: 321}, {name: 'เวียดนาม', value: 273}], 
          dataSentPie = [{name: 'ส่ง', value: 472}, {name: 'ไม่ส่ง', value: 122}],
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
                    {name: '2555', แรงงาน: 210, ผู้ติดตาม: 72, amt: 2400},
                    {name: '2556', แรงงาน: 195, ผู้ติดตาม: 66, amt: 2210},
                    {name: '2557', แรงงาน: 238, ผู้ติดตาม: 85, amt: 2290},
                    {name: '2558', แรงงาน: 269, ผู้ติดตาม: 88, amt: 2000},
                    {name: '2559', แรงงาน: 254, ผู้ติดตาม: 75, amt: 2181},
                    {name: '2560', แรงงาน: 266, ผู้ติดตาม: 83, amt: 2500},
                    {name: '2561', แรงงาน: 230, ผู้ติดตาม: 73, amt: 2100},
                  ],
          COLORS = ['#6600cc', '#d9b3ff'],
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
        <Grid celled='internally'>
          <Grid.Row columns={2}>
            <Grid.Column width={7}>
              <Message size='small' color='purple'>
                <Message.Header>จำนวนแรงงานแต่ละสัญชาติ</Message.Header>
              </Message>
              <PieChart width={800} height={300} margin={{left:-200}}>
                <Pie isAnimationActive={true} data={dataPie} outerRadius={120} fill="#9370DB" label/>
                <Tooltip/>
              </PieChart>
            </Grid.Column>
            <Grid.Column width={9}>
              <Message size='small' color='purple'>
                <Message.Header>กราฟแสดงจำนวนแรงงานแต่ละเชื้อชาติในแต่ละพื้นที่ของกรุงเทพฯ</Message.Header>
              </Message>
              <BarChart width={700} height={300} data={dataBar}
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

            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Message size='small' color='purple'>
                <Message.Header>กราฟแสดงความสัมพันธ์ของจำนวนแรงงานและผู้ติดตามในแต่ละปี</Message.Header>
              </Message>
              <LineChart width={800} height={350} data={dataLine}
                        margin={{top: 0, right: 30, left: 10, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="แรงงาน" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="ผู้ติดตาม" stroke="#c266ff" />
              </LineChart>
            </Grid.Column>
            <Grid.Column width={4}>
              <Message size='small' color='purple'>
                <Message.Header>จำนวนโครงการที่ส่งและไม่ส่งข้อมูล</Message.Header>
              </Message>
              <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={dataSentPie} 
                  cx={250} 
                  cy={150} 
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150} 
                  fill="#8884d8">
                  {
                    dataSentPie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
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
