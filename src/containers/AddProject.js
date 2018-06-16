import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';
import { DatesRangeInput } from 'semantic-ui-calendar-react'

class AddProject extends Component {
  state = {
    projectID: '',
    projectName: '',
    province: '',
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

  onConfirmClick = () => {
    console.log('sss');
  }

  onCancelClick = () => {
    
  }
  render() {
    const {
      projectID,
      projectName,
      province,
      constructionDuration,
      pmName,
      email
    } = this.state;
    console.log(this.state.projectID)
    return (
      <div className="container">
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
          <TextInput 
            label="Province"
            iconName="map marker alternate"
            placeholder="province..."
            value={province}
            onTextChange={this.onTextChange('province')}
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
