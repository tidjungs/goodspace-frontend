import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';

class Children extends Component {
  state = {
    childrenData: [
      { id: 1234, name: 'test test', parent: 'abc', camp: 'A' },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B' }
    ]
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
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
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Project Name"
            iconName="building"
            placeholder="project name..."
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Province"
            iconName="map marker alternate"
            placeholder="province..."
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Construction duration"
            iconName="calendar"
            placeholder="duration..."
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Project Manager"
            iconName="user"
            placeholder="project manager..."
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Email"
            iconName="at"
            placeholder="email..."
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
