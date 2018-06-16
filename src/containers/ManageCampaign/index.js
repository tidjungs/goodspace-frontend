import React from 'react';
import baby from '../../images/baby.png';
import family from '../../images/family.png';
import tent from '../../images/tent.png';
import visitor from '../../images/visitor.png';
import enginner from '../../images/engineer.png';
import plusIcon from '../../images/add.svg';

import './style.css';

const ManageCamapign = () => (
  <div className="manage-campaign-container">
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={baby} alt="" />
        <label className="manage-campaign-label">Add new Child</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={plusIcon} alt="" />
      </div>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={family} alt="" />
        <label className="manage-campaign-label">Add new Parent</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={plusIcon} alt="" />
      </div>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={tent} alt="" />
        <label className="manage-campaign-label">Add new Camp</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={plusIcon} alt="" />
      </div>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={visitor} alt="" />
        <label className="manage-campaign-label">Add new Campaign</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={plusIcon} alt="" />
      </div>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={enginner} alt="" />
        <label className="manage-campaign-label">Add new Suplier</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={plusIcon} alt="" />
      </div>
    </div>
  </div>
);

export default ManageCamapign;