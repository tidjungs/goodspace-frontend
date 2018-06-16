import React, { Component } from 'react';
import bg from '../../images/bg.png'
import childrenImg from '../../images/child.png';
import parentImg from '../../images/parents.png';
import campImg from '../../images/camp.png';
import manageCampaignImg from '../../images/manage.png';
import resultImg from '../../images/result.png';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <label className="title">Good Space</label><br />
          <label className="sub-title">ajsdhjhkdhjqhefjhejkfhkqehfkh</label>
          <div className="mt-2" />
          <div className="row-1">
            <div className="main-button">
              <img className="main-button-img" src={childrenImg} alt="" /><br />
              <label className="main-button-title">Children</label>
              <label className="main-button-sub-title">Search For Children</label>
            </div>
            <div className="main-button">
              <img className="main-button-img" src={parentImg} alt="" /><br />
              <label className="main-button-title">Parent</label>
              <label className="main-button-sub-title">Search For Parent</label>
            </div>
            <div className="main-button">
              <img className="main-button-img" src={campImg} alt="" /><br />
              <label className="main-button-title">Camp</label>
              <label className="main-button-sub-title">Search For Camp</label>
            </div>
          </div>
          <div className="row-2">
            <div className="main-button">
              <img className="main-button-img" src={manageCampaignImg} alt="" /><br />
              <label className="main-button-title">Manage Campaign</label>
              <label className="main-button-sub-title">Search For Campaign</label>
            </div>
            <div className="main-button">
              <img className="main-button-img" src={resultImg} alt="" /><br />
              <label className="main-button-title">Result</label>
              <label className="main-button-sub-title">View Result</label>
            </div>
          </div>
        </div>
        <img className="background" src={bg} alt="" />
      </div>
    );
  }
}

export default Main;
