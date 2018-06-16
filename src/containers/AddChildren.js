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
          label = 'Add New Children'
        />
        <div class="mt-1">
          <TextInput 
            label = 'Name'
            iconName = 'user'
            placeholder = 'Name...'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Gender'
            choice1 = 'Male'
            choice2 = 'Female'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Parents Name'
            iconName = 'users'
            placeholder = 'Parent Name...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'ID Number'
            iconName = 'address card'
            placeholder = 'ID Number...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Birthdate'
            iconName = 'calendar'
            placeholder = 'Birthdate...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Age'
            iconName = 'child'
            placeholder = 'Age...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Nationality'
            iconName = 'map marker alternate'
            placeholder = 'Nationality...'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Stay'
            choice1 = 'Temporary'
            choice2 = 'Permanent'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Has school?'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Grade'
            iconName = 'book'
            placeholder = 'Grade...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'School name'
            iconName = 'student'
            placeholder = 'School name...'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Vaccine'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Past vaccine'
            iconName = 'hospital'
            placeholder = 'Past vaccine...'
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
