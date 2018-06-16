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
          label = 'Add New Parent'
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
            label = 'Phone'
            iconName = 'phone'
            placeholder = 'Phone...'
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
            label = 'Nationality'
            iconName = 'map marker alternate'
            placeholder = 'Nationality...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Project name'
            iconName = 'building'
            placeholder = 'Project name...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Suplier name'
            iconName = 'handshake'
            placeholder = 'Suplier name...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Camp'
            iconName = 'home'
            placeholder = 'Camp...'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Has followers'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Husband'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Wife'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <RadioButton 
            label = 'Children'
            choice1 = 'Yes'
            choice2 = 'No'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'How many children ?'
            iconName = 'child'
            placeholder = 'number of children...'
          />
        </div>
        <div class="mt-1">
          <TextInput 
            label = 'Other followers'
            iconName = 'users'
            placeholder = 'relation...'
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
