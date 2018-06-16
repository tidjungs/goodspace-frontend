import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';

class Children extends Component {
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

  render() {
    const {
      projectID,
      projectName,
      province,
      constructionDuration,
      pmName,
      email
    } = this.state;
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
          <TextInput 
            label="Construction duration"
            iconName="calendar"
            placeholder="duration..."
            value={constructionDuration}
            onTextChange={this.onTextChange('constructionDuration')}
          />
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
          <ConfirmButton />
        </div>
      </div>
    );
  }
}

export default Children;
