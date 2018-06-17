import React, { Component } from 'react';
import moment from 'moment';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import { postProject } from '../utils/api';
import { Form, Icon } from 'semantic-ui-react';
// import NavBar from '../components/NavBar';

class AddProject extends Component {
  state = {
    projectID: '',
    projectName: '',
    constructionDuration: '',
    pmName: '',
    email: ''
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleDateChange = (event, {name, value}) => {
    this.setState({ constructionDuration: value });
  }

  onConfirmClick = async () => {
    const { projectID, projectName, constructionDuration, pmName, email } = this.state;
    const startDate = moment(constructionDuration.split(' ')[0]).unix();
    const endDate = moment(constructionDuration.split(' ')[2]).unix();
    await postProject({
      id: projectID,
      nameTH: projectName,
      startDate,
      endDate,
      managerContact: {
        name: pmName,
        email,
      }
    });
    this.props.history.goBack()
  }

  onCancelClick = () => {
    this.props.history.goBack()
  }
  render() {
    const {
      projectID,
      projectName,
      constructionDuration,
      pmName,
      email
    } = this.state;
    return (
      <div className="container">
        {/* <NavBar path="/campaign" /> */}
        <PageTitle 
          label="Add New Project"
        />
        {/* <div className="mt-1">
          <TextInput 
            label="รหัสโครงการ"
            iconName="id card"
            placeholder="รหัสโครงการ..."
            value={projectID}
            onTextChange={this.onTextChange('projectID')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ชื่อโครงการ"
            iconName="building"
            placeholder="ชื่อโครงการ..."
            value={projectName}
            onTextChange={this.onTextChange('projectName')}
          />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>Construction Duration</label></b>
          </div>
          <DatesRangeInput
            name="ระยะเวลาที่ก่อสร้าง"
            placeholder="เริ่ม - จบ"
            value={constructionDuration}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ชื่อผู้ควบคุมโครงการ"
            iconName="user"
            placeholder="ชื่อโครงการ..."
            value={pmName}
            onTextChange={this.onTextChange('pmName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Email ของผู้ควบคุมโครงการ"
            iconName="at"
            placeholder="email..."
            value={email}
            onTextChange={this.onTextChange('email')}
          />
        </div>
        <div className="mt-1">
          <ConfirmButton 
            onConfirmClick={this.onConfirmClick}
            onCancelClick={this.onCancelClick}
          />
        </div> */}
        <div className="mt-1">
          <Form>
            <Form.Group>
              <Form.Input label='รหัสโครงการ' 
                          icon="id card"
                          placeholder="รหัสโครงการ..."
                          value={projectID}
                          iconPosition='left'
                          onChange={this.onTextChange('projectID')} 
                          width={7} />
              <Form.Input label='ชื่อโครงการ' 
                          icon="building"
                          placeholder="ชื่อโครงการ..."
                          value={projectName}
                          iconPosition='left'
                          onChange={this.onTextChange('projectName')} 
                          width={7} />
            </Form.Group>
            <Form.Group>
              <Form.Input label='ชื่อผู้ควบคุมโครงการ' 
                          icon="user"
                          placeholder="ชื่อผู้ควบคุม..."
                          value={pmName}
                          iconPosition='left'
                          onChange={this.onTextChange('pmName')} 
                          width={7} />
              <Form.Input label='Email ของผู้ควบคุมโครงการ' 
                          icon="at"
                          placeholder="email..."
                          value={email}
                          iconPosition='left'
                          onChange={this.onTextChange('email')} 
                          width={7} />
            </Form.Group>
            <Form.Group>
              <Form.Input>
                <div>
                  <b><label>วันเดือนปีเกิด</label></b>
                  <DatesRangeInput name="ระยะเวลาที่ก่อสร้าง"
                           placeholder="เริ่ม - จบ"
                           value={constructionDuration}
                           iconPosition="left"
                           onChange={this.handleDateChange} />
                </div>
              </Form.Input>
              <Form.Input>
                <div className="mt-2" style={{margin:"18px 0px 0px 0px"}}>
                  <ConfirmButton onConfirmClick={this.onConfirmClick} onCancelClick={this.onCancelClick} />
                </div>
              </Form.Input>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddProject;
