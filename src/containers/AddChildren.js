import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';
// import NavBar from '../components/NavBar';
import { DateInput } from 'semantic-ui-calendar-react';
import { getParent, postChildren } from '../utils/api';

class Children extends Component {
  state = {
    name: '',
    gender: 'Male',
    parent: '',
    IDNumber: '',
    birthdate: '',
    age: '',
    nationality: '',
    stayStatus: 'Temporary',
    hasSchool: 'Yes',
    grade: '',
    schoolName: '',
    vaccine: 'Yes',
    pastVaccine: '',
    assignDate: '',
    takeDate: '',
    parentData: [],
  }
  
  async componentDidMount() {
    const res = await getParent();
    this.setState({
      parentData: res.data.data
    })
  }
 
  onParentChange = (e, { value }) => {
    this.setState({
      parent: value.split('-')[1],
    });
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

  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }


  onConfirmClick = async () => {
    await postChildren({
      id: parseInt(this.state.IDNumber, 10),
      name: this.state.name,
      birthdate: moment(this.state.birthdate).unix(),
      nationality: this.state.nationality,
      sex: this.state.gender,
      parent_id: parseInt(this.state.parent, 10)
    });
    this.props.history.goBack()
  }

  onCancelClick = () => {
    this.props.history.goBack()
  }

  render() {
    const {
      name,
      gender,
      IDNumber,
      birthdate,
      age,
      nationality,
      stayStatus,
      hasSchool,
      grade,
      schoolName,
      vaccine,
      pastVaccine,
      assignDate,
      takeDate,
      parentData,
    } = this.state;
    return (
      <div className="container">
        <PageTitle 
          label="Add New Children"
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
          <label>Parent</label><br />
          <Input list='parents' placeholder='Parent...' onChange={this.onParentChange} />
          <Link to="/add/parent"><Icon name="plus circle" size="big" color="red" /></Link>
          <datalist id='parents'>
            {
              parentData.map(p =>
                <option value={p.name + '-' + p.id} key={p.id} />
              )
            }
          </datalist>
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
          <div className="mr-1">    
            <b><label>Birthdate</label></b>
          </div>
          <DateInput
            name="birthdate"
            placeholder="Birthdate..."
            value={birthdate}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Age"
            iconName="child"
            placeholder="Age..."
            value={age}
            onTextChange={this.onTextChange('age')}
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
          <RadioButton 
            label="Stay"
            choice={["Temporary", "Permanent"]}
            value={stayStatus}
            onChange={this.handleChange('stayStatus')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Has school?"
            choice={["Yes", "No"]}
            value={hasSchool}
            onChange={this.handleChange('hasSchool')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Grade"
            iconName="book"
            placeholder="Grade..."
            value={grade}
            onTextChange={this.onTextChange('grade')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="School name"
            iconName="student"
            placeholder="School name..."
            value={schoolName}
            onTextChange={this.onTextChange('schoolName')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="Vaccine"
            choice={["Yes", "No"]}
            value={vaccine}
            onChange={this.handleChange('vaccine')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Past vaccine"
            iconName="hospital"
            placeholder="Past vaccine..."
            value={pastVaccine}
            onTextChange={this.handleChange('pastVaccine')}
          />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>Assign vaccine date</label></b>
          </div>
          <DateInput
            name="assignDate"
            placeholder="assign date..."
            value={assignDate}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>Take vaccine date</label></b>
          </div>
          <DateInput
            name="takeDate"
            placeholder="take date..."
            value={takeDate}
            iconPosition="left"
            onChange={this.handleDateChange} />
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

export default Children;
