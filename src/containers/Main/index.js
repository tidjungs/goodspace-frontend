import React from 'react';
import childrenImg from '../../images/child.png';
import parentImg from '../../images/parents.png';
import campImg from '../../images/camp.png';
import manageCampaignImg from '../../images/manage.png';
import resultImg from '../../images/result.png';
import MainButton from '../../components/MainButton';
import './style.css';

const Main = () => (
  <div>
    <div className="main-container">
      <label className="title">Good Space</label><br />
      <div className="mt-1" />
      <label className="sub-title">For Better Life...</label>
      <div className="mt-2" />
      <div className="row-1">
        <MainButton 
          img={childrenImg}
          title="Children"
          subTitle="Search For Children"
          path="/children"
        />
        <MainButton 
          img={parentImg}
          title="Parent"
          subTitle="Search For Parent"
          path="/parent"
        />
        <MainButton 
          img={campImg}
          title="Camp"
          subTitle="Search For Camp"
          path="/camp"
        />
      </div>
      <div className="row-2">
        <MainButton 
          img={manageCampaignImg}
          title="Manage Campaign"
          subTitle="management in Good Space"
          path="/campaign"
        />
        <MainButton
          img={resultImg}
          title="Result"
          subTitle="View Result"
          path="/dashboard"
        />
      </div>
    </div>
  </div>
);

export default Main;
