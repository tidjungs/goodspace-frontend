import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';
import SelectProvince from '../components/SelectProvince';
import { getProject, postCamp } from '../utils/api';
// import NavBar from '../components/NavBar';

class AddCamp extends Component {
  state = {
    projectData: [],
    name: '',
    project: '',
    address: '',
    province: '',
    isGoodSpace: 'Yes'
  }

  async componentDidMount() {
    const res = await getProject();
    this.setState({
      projectData: res.data.data
    });
  }

  onProjectChange = (e, { value }) => {
    this.setState({
      project: value.split('-')[1],
    });
  }
  onProvinceChange = (e, { value }) => {
    this.setState({
      province: value,
    });
  }

  onTextChange = (key) => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleChange = (e, { value }) => {
    this.setState({ isGoodSpace: value })
  }

  onConfirmClick = async () => {
    const { name, project, address, province, isGoodSpace } = this.state;
    await postCamp({
      name,
      location: address,
      province,
      has_goodspace: isGoodSpace === "มี" ? true : false,
      project_id: parseInt(project, 10),
    });
    this.props.history.goBack()
  }

  onCancelClick = () => {
    this.props.history.goBack()
  }

  render() {
    const {
      name,
      projectData,
      address,
      isGoodSpace
    } = this.state;
    return (
      <div className="container">
        {/* <NavBar path="/camp" /> */}
        <PageTitle 
          label="Add New Camp"
        />
        <div className="mt-1">
          <TextInput 
            label="ชื่อ"
            placeholder="กรอกชื่อแคมป์..."
            value={name}
            onTextChange={this.onTextChange('name')}
          />
        </div>
        <div className="mt-1">
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
            label="ที่อยู่"
            iconName="home"
            placeholder="กรอกที่อยู่..."
            value={address}
            onTextChange={this.onTextChange('address')}
          />
        </div>
        <div className="mt-1">
          <b><label>จังหวัด</label></b><br />
          <SelectProvince onChange={this.onProvinceChange} />
        </div>
        <div className="mt-1">
          <RadioButton 
            label="ที่แคมป์นี้มี Good space หรือไม่?"
            choice={["มี", "ไม่มี"]}
            value={isGoodSpace}
            onChange={this.handleChange}
          />
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

export default AddCamp;
