import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';
// import NavBar from '../components/NavBar';
import { getCamp, getProject, postParent } from '../utils/api';

class Children extends Component {
  state = {
    name: '',
    gender: 'Male',
    phone: '',
    IDNumber: '',
    nationality: '',
    projectName: '',
    suplierName: '',
    hasFollower: 'Yes',
    husband: 'Yes',
    wife: 'Yes',
    children: 'Yes',
    childrenNumber: '',
    othersFollower: '',
    projectData: [],
    campData: [],
    project: '',
    camp: '',
    suplierName: ''
  }

  async componentDidMount() {
    const responseCamp = await getCamp();
    const responseProject = await getProject();
    this.setState({
      campData: responseCamp.data.data,
      projectData: responseProject.data.data
    });
  }

  onProjectChange = (e, { value }) => {
    this.setState({
      project: value.split('-')[1],
    });
  }
  onCampChange = (e, { value }) => {
    this.setState({
      camp: value,
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

  onConfirmClick = async () => {
    await postParent({
      id: parseInt(this.state.IDNumber, 10),
      name: this.state.name,
      tel: this.state.phone,
      nationality: this.state.nationality,
      camp_id: parseInt(this.state.camp, 10),
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
      phone,
      IDNumber,
      nationality,
      suplierName,
      hasFollower,
      husband,
      wife,
      children,
      childrenNumber,
      othersFollower,
      projectData,
      campData,
    } = this.state;
    return (
      <div className="container">
        {/* <NavBar path="/parent" /> */}
        <PageTitle 
          label="Add New Parent"
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
          <TextInput 
            label="เบอร์โทรศัพท์"
            iconName="phone"
            placeholder="กรอกเบอร์..."
            value={phone}
            onTextChange={this.onTextChange('phone')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="รหัสประจำตัว"
            iconName="address card"
            placeholder="รหัสประจำตัว..."
            value={IDNumber}
            onTextChange={this.onTextChange('IDNumber')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="สัญชาติ"
            iconName="map marker alternate"
            placeholder="ัญชาติ..."
            value={nationality}
            onTextChange={this.onTextChange('nationality')}
          />
        </div>
        <div className="mt-1">
          <b><label>ชื่อโครงการ</label></b><br />
          <Input list='projects' placeholder='กรอกชื่อโครงการ...' onChange={this.onProjectChange} />
          <Link to="/add/project"><Icon name="plus circle" size="big" color="red" /></Link>
          <datalist id='projects'>
            {
              projectData.map(p =>
                <option value={p.name_th + '-' + p.id} key={p.id} />
              )
            }
          </datalist>
        </div>
        <div className="mt-1">
          <label>ชื่อแคมป์</label><br />
          <Input list='camps' placeholder='กรอกชื่อแคมป์...' onChange={this.onCampChange} />
          <Link to="/add/camp"><Icon name="plus circle" size="big" color="red" /></Link>
          <datalist id='camps'>
            {
              campData.map(p =>
                <option value={p.id} key={p.id} />
              )
            }
          </datalist>
        </div>
        {/* <div className="mt-1">
          <TextInput 
            label="Suplier name"
            iconName="handshake"
            placeholder="Suplier name..."
            value={suplierName}
            onTextChange={this.onTextChange('suplierName')}
          />
        </div> 
        <div className="mt-1">
          <RadioButton 
            label="มีผู้ติดตามหรือไม่?"
            choice={["มี", "ไม่มี"]}
            value={hasFollower}
            onChange={this.handleChange('hasFollower')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="มีสามีเป็นผู้ติดตามหรือไม่?"
            choice={["มี", "ไม่มี"]}
            value={husband}
            onChange={this.handleChange('husband')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="มีภรรยาเป็นผู้ติดตามหรือไม่?"
            choice={["มี", "ไม่มี"]}
            value={wife}
            onChange={this.handleChange('wife')}
          />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="มีเด็กเป็นผู้ติดตามหรือไม่?"
            choice={["มี", "ไม่มี"]}
            value={children}
            onChange={this.handleChange('children')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="จำนวนเด็กที่ติดตาม?"
            iconName="child"
            placeholder="กรอกตัวเลข..."
            value={childrenNumber}
            onTextChange={this.onTextChange('childrenNumber')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="ผู้ติดตามอื่นๆ"
            iconName="users"
            placeholder="ความสัมพันธ์..."
            value={othersFollower}
            onTextChange={this.onTextChange('othersFollower')}
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
              <Form.Input label='เบอร์โทร' 
                          icon="phone"
                          placeholder="กรอกเบอร์..."
                          value={phone}
                          iconPosition='left'
                          onChange={this.onTextChange('phone')} 
                          width={7} />
            </Form.Group>
            <Form.Group>
              <Form.Input label='รหัสประจำตัว' 
                          icon="address card"
                          placeholder="รหัสประจำตัว..."
                          value={IDNumber}
                          iconPosition='left'
                          onChange={this.onTextChange('IDNumber')} 
                          width={5} />
              <Form.Input label='สัญชาติ' 
                          icon="map marker alternate"
                          placeholder="สัญชาติ..."
                          value={nationality}
                          iconPosition='left'
                          onChange={this.onTextChange('nationality')} 
                          width={5} />
              <Form.Input list='projects' placeholder='เลือกโครงการ' onChange={this.onProjectChange} label='ชื่อโครงการ' width={6} />
                <Link to="/add/project"><Icon name="plus circle" size="big" color="red" style={{margin:"25px 5px 5px 5px"}}/></Link>
                  <datalist id='projects'>
                  {
                    projectData.map(p =>
                      <option value={p.name_th + '-' + p.id} key={p.id} />
                    )
                  }
                  </datalist>
            </Form.Group>
            <Form.Group>
              <Form.Input list='camps' placeholder='เลือกแคมป์...' onChange={this.onCampChange} label='ชื่อแคมป์' width={6} />
                <Link to="/add/camp"><Icon name="plus circle" size="big" color="red" style={{margin:"25px 5px 5px 5px"}}/></Link>
                  <datalist id='camps'>
                  {
                    campData.map(p =>
                      <option value={p.id} key={p.id} />
                    )
                  }
                  </datalist>
              <Form.Input label='ชื่อผู้รับเหมา' 
                          icon="handshake"
                          placeholder="ชื่อผู้รับเหมา..."
                          value={suplierName}
                          iconPosition='left'
                          onChange={this.onTextChange('suplierName')} 
                          width={5} />              
              <Form.Input width={6}>
                <div className="mt-1" style={{margin:"25px 5px 5px 5px"}}>
                  <RadioButton label="มีผู้ติดตามหรือไม่?"
                               choice={["มี", "ไม่มี"]}
                               value={hasFollower}
                               onChange={this.handleChange('hasFollower')} />
                </div>
              </Form.Input>
            </Form.Group>
            <Form.Group>
              <Form.Input width={5}>
                <div className="mt-1">
                  <RadioButton label="มีสามีเป็นผู้ติดตามหรือไม่?"
                               choice={["มี", "ไม่มี"]}
                               value={husband}
                               onChange={this.handleChange('husband')} />
                </div>
              </Form.Input>
              <Form.Input width={5}>
                <div className="mt-1">
                  <RadioButton label="มีภรรยาเป็นผู้ติดตามหรือไม่?"
                               choice={["มี", "ไม่มี"]}
                               value={wife}
                               onChange={this.handleChange('wife')} />
                </div>
              </Form.Input>
              <Form.Input width={5}>
                <div className="mt-1">
                  <RadioButton label="มีเด็กเป็นผู้ติดตามหรือไม่?"
                               choice={["มี", "ไม่มี"]}
                               value={children}
                               onChange={this.handleChange('children')} />
                </div>
              </Form.Input>
            </Form.Group>
            <Form.Group>
              <Form.Input label='จำนวนเด็กที่ติดตาม' 
                          icon="child"
                          placeholder="กรอกตัวเลข..."
                          value={childrenNumber}
                          iconPosition='left'
                          onChange={this.onTextChange('childrenNumber')} 
                          width={5} />
              <Form.Input label='ผู้ติดตามอื่นๆ' 
                          icon="users"
                          placeholder="ความสัมพันธ์..."
                          value={othersFollower}
                          iconPosition='left'
                          onChange={this.onTextChange('othersFollower')} 
                          width={5} />
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
