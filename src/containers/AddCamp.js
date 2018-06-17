import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';
import NavBar from '../components/NavBar';

class Children extends Component {
  state = {
    address: '',
    province: '',
    isGoodSpace: ''
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleChange = (e, { value }) => {
    this.setState({ isGoodSpace: value })
  }

  render() {
    const {
      address,
      province,
      isGoodSpace
    } = this.state;
    console.log(isGoodSpace);
    return (
      <div className="container">
        <NavBar path="/camp" />
        <PageTitle 
          label="Add New Camp"
        />
        <div className="mt-1">
          <TextInput 
            label="Home"
            iconName="home"
            placeholder="Address..."
            value={address}
            onTextChange={this.onTextChange('address')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Province"
            iconName="map pin"
            placeholder="Provinces..."
            value={province}
            onTextChange={this.onTextChange('province')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Has Good Space?"
            choice={["Yes", "No"]}
            value={isGoodSpace}
            onChange={this.handleChange}
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
