import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';
import NavBar from '../components/NavBar';

class Children extends Component {
  state = {
    constructionName: '',
    pmName: '',
    phoneNumber: '',
    email: ''
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }
  
  render() {
    const {
      constructionName,
      pmName,
      phoneNumber,
      email
    } = this.state;
    return (
      <div className="container">
        <NavBar path="/campaign" />
        <PageTitle 
          label="Add New Suplier"
        />
        <div className="mt-1">
          <TextInput 
            label="Construction Name"
            iconName="building"
            placeholder="construct name..."
            value={constructionName}
            onTextChange={this.onTextChange('constructionName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Name"
            iconName="user"
            placeholder="name.."
            value={pmName}
            onTextChange={this.onTextChange('pmName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Phone"
            iconName="phone"
            placeholder="phone.."
            value={phoneNumber}
            onTextChange={this.onTextChange('phoneNumber')}
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
