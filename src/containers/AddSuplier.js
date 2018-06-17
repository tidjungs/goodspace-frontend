import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
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
        <div className="mt-1">
          <label>เลือกโครงการ</label><br />
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
          <ConfirmButton 
            onConfrimClick={this.onConfirmClick}
            onCancelClick={this.onCancelClick}
          />
        </div>
      </div>
    );
  }
}

export default Children;
