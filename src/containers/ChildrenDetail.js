import React, { Component } from 'react';
import moment from 'moment';
import NavBar from '../components/NavBar';
import girlImg from '../images/girl.png';
import { Image, Grid, Icon, Table } from 'semantic-ui-react'
import { getChildrenById } from '../utils/api';
import '../App.css'

class ChildrenDetail extends Component {
  state = {
    childrenData: null,
  }

  async componentDidMount() {
    const res = await getChildrenById(this.props.match.params.childId);
    this.setState({ childrenData: res.data });
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    const { childrenData } = this.state;
    if (!childrenData) {
      return <div />
    }
    return (
      <div className="container">
        <NavBar path="/children" />
        <div className="grid-center">
          <Image src={girlImg} size="tiny" circular style={{margin:"auto"}}/>
          {/* <label>{`child name: ${this.props.match.params.childId}`}</label> */}
          <h1>{childrenData.name}</h1>
          <br />
        </div>
        <div>
          <Grid divided='vertically'>
            <Grid.Row columns={3} >
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="free code camp" size="big"/>
                  <h4>พักอาศัยในแคมป์</h4>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="users" size="big"/>
                  <h4>พักอาศัยชั่วคราว</h4>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="check" size="big"/>
                  <h4>เรียนในเขต good space</h4>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="flex-center">
                  <h1>ข้อมูลทั่วไปของเด็ก</h1>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid divided='vertically'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <div className="flex-center">
                  <h5>{`ชื่อ: ${childrenData.name}`}</h5>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <h5>{`ชื่อผู้ปกครอง: ${childrenData.Parent.name}`}</h5>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <h5>{`วันเดือนปีเกิด: ${moment(childrenData.birthdate).format('DD/MM/YYYY')}`}</h5>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="flex-center">
                  <h1>ประวัติการศึกษา</h1>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ระดับชั้น</Table.HeaderCell>
                <Table.HeaderCell>โรงเรียน</Table.HeaderCell>
                <Table.HeaderCell>สถานะ</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row> 
                <Table.Cell>อนุบาล</Table.Cell>
                <Table.Cell>อนุบาลคุณหมี</Table.Cell>
                <Table.Cell>ผ่าน</Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>ประถมศึกษา</Table.Cell>
                <Table.Cell>ประถมคุณแมว</Table.Cell>
                <Table.Cell>ผ่าน</Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>มัธยมศึกษาตอนต้น</Table.Cell>
                <Table.Cell>มัธยมคุณหมู</Table.Cell>
                <Table.Cell>ผ่าน</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
          <div className="flex-center">
            <h1>ประวัติวัคซีน</h1>
          </div>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>อายุที่ต้องเข้ารับ</Table.HeaderCell>
                <Table.HeaderCell>ชื่อวัคซีน</Table.HeaderCell>
                <Table.HeaderCell>นัดวันที่</Table.HeaderCell>
                <Table.HeaderCell>รับวันที่</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row> 
                <Table.Cell>แรกเกิด - 1 เดือน</Table.Cell>
                <Table.Cell>BCG, HB1</Table.Cell>
                <Table.Cell>11 Jun 16</Table.Cell>
                <Table.Cell>11 Jun 16</Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>2 เดือน</Table.Cell>
                <Table.Cell>OPV1, DTH-HB</Table.Cell>
                <Table.Cell>13 Aug 16</Table.Cell>
                <Table.Cell>13 Aug 16</Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>4 เดือน</Table.Cell>
                <Table.Cell>OPV2, IPV1, DTP-HB2</Table.Cell>
                <Table.Cell>10 Oct 16</Table.Cell>
                <Table.Cell>10 Oct 16</Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>6 เดือน</Table.Cell>
                <Table.Cell>OPV3, DTP-HB3</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>9 เดือน</Table.Cell>
                <Table.Cell>MMR1</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>1 ปี</Table.Cell>
                <Table.Cell>LAJE1</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>1 ปี 6 เดือน</Table.Cell>
                <Table.Cell>OPV4, DTP4</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>2 ปี 6 เดือน</Table.Cell>
                <Table.Cell>MMR2, LAJE2</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row> 
                <Table.Cell>4 ปี</Table.Cell>
                <Table.Cell>OPV5, DTP5</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
        </div>
      </div>
    );
  }
}

export default ChildrenDetail;
