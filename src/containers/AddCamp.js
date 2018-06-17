import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import TextInput from '../components/TextInput';
import ConfirmButton from '../components/ConfirmButton';
import RadioButton from '../components/RadioButton';
import PageTitle from '../components/PageTitle';
import SelectProvince from '../components/SelectProvince';
import { getProject } from '../utils/api';

class AddCamp extends Component {
  state = {
    projectData: [],
    project: '',
    address: '',
    province: '',
    isGoodSpace: 'Yes'
  }

  async componentDidMount() {
    const res = await getProject();
    this.setState({
      projectData: res.data
    });
  }

  onProvinceChange = (e, { value }) => {
    this.setState({
      project: value,
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

  render() {
    const {
      projectData,
      address,
      isGoodSpace
    } = this.state;
    console.log(projectData);
    return (
      <div className="container">
        <PageTitle 
          label="Add New Camp"
        />
        <div className="mt-1">
          <label>เลือกโครงการ</label>
          <Input list='projects' placeholder='เลือกโครงการ' />
          <datalist id='projects'>
            {
              projectData.map(p =>
                <option value={p.name_th} />
              )
            }
          </datalist>
        </div>
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
          <label>จังหวัด</label><br />
          <SelectProvince onChange={this.onProvinceChange} />
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

export default AddCamp;
