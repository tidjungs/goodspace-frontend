import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';

class Children extends Component {
  state = {
    name: '',
    gender: '',
    phone: '',
    IDNumber: '',
    nationality: '',
    projectName: '',
    suplierName: '',
    camp: '',
    hasFollower: '',
    husband: '',
    wife: '',
    children: '',
    childrenNumber: '',
    othersFollower: ''
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleChange = (key) => (e, { value }) => {
    this.setState({ 
      [key]: value 
    })
  }
  
  render() {
    const {
      name,
      gender,
      phone,
      IDNumber,
      nationality,
      projectName,
      suplierName,
      camp,
      hasFollower,
      husband,
      wife,
      children,
      childrenNumber,
      othersFollower,
    } = this.state;
    return (
      <div className="container">
        <PageTitle 
          label="Add New Parent"
        />
        <div className="mt-1">
          <TextInput 
            label="Name"
            iconName="user"
            placeholder="Name..."
            value={name}
            onTextChange={this.onTextChange('name')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Gender"
            choice={["Male", "Female"]}
            value={gender}
            onChange={this.handleChange('gender')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Phone"
            iconName="phone"
            placeholder="Phone..."
            value={phone}
            onTextChange={this.onTextChange('phone')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ID Number"
            iconName="address card"
            placeholder="ID Number..."
            value={IDNumber}
            onTextChange={this.onTextChange('IDNumber')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Nationality"
            iconName="map marker alternate"
            placeholder="Nationality..."
            value={nationality}
            onTextChange={this.onTextChange('nationality')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Project name"
            iconName="building"
            placeholder="Project name..."
            value={projectName}
            onTextChange={this.onTextChange('projectName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Suplier name"
            iconName="handshake"
            placeholder="Suplier name..."
            value={suplierName}
            onTextChange={this.onTextChange('suplierName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Camp"
            iconName="home"
            placeholder="Camp..."
            value={camp}
            onTextChange={this.onTextChange('camp')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Has followers"
            choice={["Yes", "No"]}
            value={hasFollower}
            onChange={this.handleChange('hasFollower')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Husband"
            choice={["Yes", "No"]}
            value={husband}
            onChange={this.handleChange('husband')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Wife"
            choice={["Yes", "No"]}
            value={wife}
            onChange={this.handleChange('wife')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Children"
            choice={["Yes", "No"]}
            value={children}
            onChange={this.handleChange('children')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="How many children ?"
            iconName="child"
            placeholder="number of children..."
            value={childrenNumber}
            onTextChange={this.onTextChange('childrenNumber')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Other followers"
            iconName="users"
            placeholder="relation..."
            value={othersFollower}
            onTextChange={this.onTextChange('othersFollower')}
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
