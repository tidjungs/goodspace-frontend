import React, { Component } from 'react';
import moment from 'moment';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import { postProject } from '../utils/api';
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
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
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
        <div className="mt-1">
          <TextInput 
            label="Project ID"
            iconName="id card"
            placeholder="project ID..."
            value={projectID}
            onTextChange={this.onTextChange('projectID')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Project Name"
            iconName="building"
            placeholder="project name..."
            value={projectName}
            onTextChange={this.onTextChange('projectName')}
          />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>Construction Duration</label></b>
          </div>
          <DatesRangeInput
            name="constructionDuration"
            placeholder="From - To"
            value={constructionDuration}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Project Manager"
            iconName="user"
            placeholder="project manager..."
            value={pmName}
            onTextChange={this.onTextChange('pmName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Email"
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
        </div>
      </div>
    );
  }
}

export default AddProject;
