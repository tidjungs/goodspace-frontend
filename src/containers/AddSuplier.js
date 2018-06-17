import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import PageTitle from '../components/PageTitle';
// import NavBar from '../components/NavBar';
import { getProject } from '../utils/api';

class Children extends Component {
  state = {
    projectData: [],
    constructionName: '',
    pmName: '',
    phoneNumber: '',
    email: ''
  }

  async componentDidMount() {
    const res = await getProject();
    this.setState({
      projectData: res.data.data
    });
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  onConfirmClick = async () => {
    // const { project, address, province, isGoodSpace } = this.state;
    // const res = await postCamp({
    //   location: address,
    //   province,
    //   has_goodspace: isGoodSpace,
    //   project_id: project,
    // });
    this.props.history.goBack()
  }

  onCancelClick = () => {
    this.props.history.goBack()
  }

  render() {
    const {
      projectData,
      pmName,
      phoneNumber,
      email
    } = this.state;
    return (
      <div className="container">
        {/* <NavBar path="/campaign" /> */}
        <PageTitle 
          label="Add New Suplier"
        />
        {/* <div className="mt-1">
          <b><label>เลือกโครงการ</label></b><br />
          <Input list='projects' placeholder='เลือกโครงการ' onChange={this.onProjectChange} />
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
          <TextInput 
            label="ชื่อผู้รับเหมา"
            iconName="user"
            placeholder="กรอกชื่อ.."
            value={pmName}
            onTextChange={this.onTextChange('pmName')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="เบอร์ติดต่อ"
            iconName="phone"
            placeholder="เบอร์ติดต่อ.."
            value={phoneNumber}
            onTextChange={this.onTextChange('phoneNumber')}
          />
        </div>
        <div className="mt-1">
          <TextInput 
            label="Email ผู้รับเหมา"
            iconName="at"
            placeholder="email..."
            value={email}
            onTextChange={this.onTextChange('email')}
          />
        </div>
        <div className="mt-1">
          <ConfirmButton 
            onConfrimClick={this.onConfirmClick}
            onCancelClick={this.onCancelClick}
          />
        </div> */}
        <div className="mt-1">
          <Form>
            <Form.Group>
              <Form.Input list='projects' placeholder='เลือกโครงการ' onChange={this.onProjectChange} label='ชื่อโครงการ' width={6} />
                <Link to="/add/project"><Icon name="plus circle" size="big" color="red" style={{margin:"25px 5px 5px 5px"}}/></Link>
                  <datalist id='projects'>
                  {
                    projectData.map(p =>
                      <option value={p.name_th + '-' + p.id} key={p.id} />
                    )
                  }
                  </datalist>
              <Form.Input label='ชื่อผู้รับเหมา' 
                          icon="user"
                          placeholder="กรอกชื่อ..."
                          value={pmName}
                          iconPosition='left'
                          onChange={this.onTextChange('pmName')} 
                          width={7} />
            </Form.Group>
            <Form.Group>
              <Form.Input label='เบอร์ติดต่อ' 
                          icon="phone"
                          placeholder="เบอร์ติดต่อ..."
                          value={phoneNumber}
                          iconPosition='left'
                          onChange={this.onTextChange('phoneNumber')} 
                          width={6} />
              <Form.Input label='Email ผู้รับเหมา' 
                          icon="at"
                          placeholder="email..."
                          value={email}
                          iconPosition='left'
                          onChange={this.onTextChange('email')} 
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
