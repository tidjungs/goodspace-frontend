import React, { Component } from 'react';
import { Grid, Message } from 'semantic-ui-react'
import NationalChart from '../components/NationalChart';
import AreaChart from '../components/AreaChart';
import YearChart from '../components/YearChart';
import SentChart from '../components/SentChart';
import '../App.css';

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
                  ];
    return (
      <div>
        <Grid celled='internally'>
          <Grid.Row columns={2}>
            <Grid.Column width={7}>
              <Message size='small' color='purple'>
                <Message.Header>
                  <p className="titleName">
                    จำนวนแรงงานแต่ละสัญชาติ
                  </p>
                </Message.Header>
              </Message>
              <NationalChart data = {dataPie} />
            </Grid.Column>
            <Grid.Column width={9}>
              <Message size='small' color='purple'>
                <Message.Header>
                  <p className="titleName">
                    กราฟแสดงจำนวนแรงงานแต่ละเชื้อชาติในแต่ละพื้นที่ของกรุงเทพฯ
                  </p>
                </Message.Header>
              </Message>
              <AreaChart data = {dataBar} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Message size='small' color='purple'>
                <Message.Header>
                  <p className="titleName">
                   กราฟแสดงความสัมพันธ์ของจำนวนแรงงานและผู้ติดตามในแต่ละปี
                  </p></Message.Header>
                </Message>
              <YearChart data = {dataLine} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Message size='small' color='purple'>
                <Message.Header>
                  <p className="titleName">
                    จำนวนโครงการที่ส่งและไม่ส่งข้อมูล
                  </p>
                </Message.Header>
              </Message>
              <SentChart data = {dataSentPie} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
