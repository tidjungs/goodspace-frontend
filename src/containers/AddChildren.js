import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
      // assignDate,
      // takeDate,
      parentData,
    } = this.state;
    return (
      <div className="container">
        <PageTitle 
          label="Add New Children"
        />
        {/* <div className="mt-1">
          <TextInput 
            label="ชื่อ"
            iconName="user"
            placeholder="ชื่อ..."
            value={name}
            onTextChange={this.onTextChange('name')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="เพศ"
            choice={["ชาย", "หญิง"]}
            value={gender}
            onChange={this.handleChange('gender')}
          />
        </div>
        <div className="mt-1">
          <b><label>ผู้ปกครอง</label></b><br />
          <Input list='parents' placeholder='ชื่อผู้ปกครอง...' onChange={this.onParentChange} />
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
            label="รหัสประจำตัวเด็ก"
            iconName="address card"
            placeholder="รหัสประจำตัว..."
            value={IDNumber}
            onTextChange={this.onTextChange('IDNumber')}
          />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>วันเดือนปีเกิด</label></b>
          </div>
          <DateInput
            name="birthdate"
            placeholder="เลือกวันเดือนปี..."
            value={birthdate}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <TextInput 
            label="อายุ"
            iconName="child"
            placeholder="อายุ..."
            value={age}
            onTextChange={this.onTextChange('age')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="สัญชาติ"
            iconName="map marker alternate"
            placeholder="สัญชาติ..."
            value={nationality}
            onTextChange={this.onTextChange('nationality')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="ลักษณะการติดตาม?"
            choice={["ประจำ", "ชั่วคราว"]}
            value={stayStatus}
            onChange={this.handleChange('stayStatus')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="ได้รับการศึกษาหรือไม่?"
            choice={["ได้", "ไม่"]}
            value={hasSchool}
            onChange={this.handleChange('hasSchool')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ระดับการศึกษา"
            iconName="book"
            placeholder="ระดับการศึกษา..."
            value={grade}
            onTextChange={this.onTextChange('grade')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ชื่อโรงเรียน"
            iconName="student"
            placeholder="กรอกชื่อโรงเรียน..."
            value={schoolName}
            onTextChange={this.onTextChange('schoolName')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="ได้รับวัคซีนหรือไม่?"
            choice={["ได้รับ", "ไม่ได้รับ"]}
            value={vaccine}
            onChange={this.handleChange('vaccine')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="วัคซีนที่เคยได้รับ"
            iconName="hospital"
            placeholder="Past vaccine..."
            value={pastVaccine}
            onTextChange={this.handleChange('pastVaccine')}
          />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>วันที่นัดรับ</label></b>
          </div>
          <DateInput
            name="assignDate"
            placeholder="เลือกวันที่..."
            value={assignDate}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <div className="mr-1">    
            <b><label>วันที่ได้รับ</label></b>
          </div>
          <DateInput
            name="takeDate"
            placeholder="เลือกวันที่..."
            value={takeDate}
            iconPosition="left"
            onChange={this.handleDateChange} />
        </div>
        <div className="mt-1">
          <ConfirmButton 
            onConfirmClick={this.onConfirmClick}
            onCancelClick={this.onCancelClick}
          />
        </div> */}
        <div className="mt-1">
          <Form>
            <Form.Group>
              <Form.Input label='ชื่อ' 
                          icon="user"
                          placeholder="ชื่อ..."
                          value={name}
                          iconPosition='left'
                          onChange={this.onTextChange('name')} 
                          width={7} />
              <Form.Input width={3}>
                <div className="mt-1" style={{margin:"25px 5px 5px 5px"}}>
                  <RadioButton label="เพศ"
                               choice={["ชาย", "หญิง"]}
                               value={gender}
                               onChange={this.handleChange('gender')} />
                </div>
              </Form.Input>
              <Form.Input>
                <div>
                  <b><label>วันเดือนปีเกิด</label></b>
                  <DateInput name="birthdate"
                           placeholder="เลือกวันเดือนปี..."
                           value={birthdate}
                           iconPosition="left"
                           onChange={this.handleDateChange} />
                </div>
              </Form.Input>
            </Form.Group>
            <Form.Group>
              <Form.Input list='parents' placeholder='ชื่อผู้ปกครอง' onChange={this.onProjectChange} label='ชื่อผู้ปกครอง' width={6} />
                <Link to="/add/parent"><Icon name="plus circle" size="big" color="red" style={{margin:"25px 5px 5px 5px"}}/></Link>
                  <datalist id='projects'>
                  {
                    parentData.map(p =>
                      <option value={p.name_th + '-' + p.id} key={p.id} />
                    )
                  }
                  </datalist>
              <Form.Input label='รหัสประจำตัวเด็ก' 
                          icon="address card"
                          placeholder="รหัสประจำตัว..."
                          value={IDNumber}
                          iconPosition='left'
                          onChange={this.onTextChange('IDNumber')} 
                          width={6} />
              <Form.Input label='อายุ' 
                          icon="child"
                          placeholder="อายุ..."
                          value={age}
                          iconPosition='left'
                          onChange={this.onTextChange('age')} 
                          width={2} />
            </Form.Group>
            <Form.Group>
              <Form.Input label='สัญชาติ' 
                          icon="map marker alternate"
                          placeholder="สัญชาติ..."
                          value={nationality}
                          iconPosition='left'
                          onChange={this.onTextChange('nationality')} 
                          width={4} />
              <Form.Input width={5}>
                <div className="mt-1" style={{margin:"25px 5px 5px 5px"}}>
                  <RadioButton label="ลักษณะการติดตาม"
                               choice={["ประจำ", "ชั่วคราว"]}
                               value={stayStatus}
                               onChange={this.handleChange('stayStatus')} />
                </div>
              </Form.Input>
              <Form.Input width={5}>
                <div className="mt-1" style={{margin:"25px 5px 5px 5px"}}>
                  <RadioButton label="ได้รับการศึกษาหรือไม่"
                               choice={["ได้", "ไม่"]}
                               value={hasSchool}
                               onChange={this.handleChange('stayStatus')} />
                </div>
              </Form.Input>
            </Form.Group>
            <Form.Group>
              <Form.Input label='ระดับการศึกษา' 
                          icon="book"
                          placeholder="ระดับการศึกษา..."
                          value={grade}
                          iconPosition='left'
                          onChange={this.onTextChange('grade')} 
                          width={6} />
              <Form.Input label='ชื่อโรงเรียน' 
                          icon="student"
                          placeholder="กรอกชื่อโรงเรียน..."
                          value={schoolName}
                          iconPosition='left'
                          onChange={this.onTextChange('schoolName')} 
                          width={8} />
            </Form.Group>
            <Form.Group>
              <Form.Input width={5}>
                <div className="mt-1" style={{margin:"25px 5px 5px 5px"}}>
                  <RadioButton label="ได้รับวัคซีนหรือไม่?"
                               choice={["ได้รับ", "ไม่ได้รับ"]}
                               value={vaccine}
                               onChange={this.handleChange('vaccine')} />
                </div>
              </Form.Input>
              <Form.Input label='วัคซีนที่เคยได้รับ' 
                          icon="hospital"
                          placeholder="ชื่อวัคซีน..."
                          value={pastVaccine}
                          iconPosition='left'
                          onChange={this.onTextChange('pastVaccine')} 
                          width={6} />
              <Form.Input>
                <div className="mt-2">
                  <ConfirmButton onConfirmClick={this.onConfirmClick} onCancelClick={this.onCancelClick} />
                </div>
              </Form.Input>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Children;
