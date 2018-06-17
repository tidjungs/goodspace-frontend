import React from 'react';
import { Link } from 'react-router-dom';
import baby from '../../images/baby.png';
import family from '../../images/family.png';
import tent from '../../images/tent.png';
import visitor from '../../images/visitor.png';
import enginner from '../../images/engineer.png';
import pblue from '../../images/pblue.png';
import pred from '../../images/pred.png';
import pgreen from '../../images/pgreen.png';
import pyellow from '../../images/pyellow.png';
import ppurple from '../../images/ppurple.png';

import './style.css';

const ManageCamapign = () => (
  <div className="manage-campaign-container">
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={baby} alt="" />
        <label className="manage-campaign-label">Add new Child</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={pblue} alt="" />
      </div>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={family} alt="" />
        <label className="manage-campaign-label">Add new Parent</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={pred} alt="" />
      </div>
    </div>
      <div>
        <Link to="/add/camp">
          <div className="manage-campaign-card">
            <img className="manage-campaign-img" src={tent} alt="" />
            <label className="manage-campaign-label">Add new Camp</label>
          </div>
          <div className="manage-campaign-plus">
            <img src={pgreen} alt="" />
          </div>
        </Link>
      </div>
    <div>
      <Link to="/add/project">
        <div className="manage-campaign-card">
          <img className="manage-campaign-img" src={visitor} alt="" />
          <label className="manage-campaign-label">Add new Project</label>
        </div>
        <div className="manage-campaign-plus">
          <img src={pyellow} alt="" />
        </div>
      </Link>
    </div>
    <div>
      <div className="manage-campaign-card">
        <img className="manage-campaign-img" src={enginner} alt="" />
        <label className="manage-campaign-label">Add new Suplier</label>
      </div>
      <div className="manage-campaign-plus">
        <img src={ppurple} alt="" />
      </div>
    </div>
  </div>
);

export default ManageCamapign;