import React, { Component } from 'react';
import { Form, Radio, Button } from 'semantic-ui-react'
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
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
          label = 'Add New Camp'
        />
        <div class="mt-1">
          <TextInput 
            label = 'Home'
            iconName = 'home'
            placeholder = 'Address...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Province'
            iconName = 'map pin'
            placeholder = 'Provinces..'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Has Good Space?'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <ConfirmButton />
        </div>
      </div>
    );
  }
}

export default Children;
