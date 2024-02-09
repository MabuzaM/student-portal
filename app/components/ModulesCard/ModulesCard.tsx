import React from 'react';
import './ModulesCard.scss';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const ModulesCard = () => {
  return (
   <article className="Card">
      <h2 className="Card_title">Modules</h2>

      <div className="Card_image">image</div>

      <div className="Module">
        <h5 className="Module_name">Computer Architecture</h5>

        <div className="Module_info">
          <p className="Module_info--label">Hod:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Lecturer:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Tutor:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <hr className="Module_line" />
      </div>

      <div className="Module">
        <h5 className="Module_name">Computer Architecture</h5>

        <div className="Module_info">
          <p className="Module_info--label">Hod:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Lecturer:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Tutor:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <hr className="Module_line" />
      </div>

      <div className="Module">
        <h5 className="Module_name">Computer Architecture</h5>

        <div className="Module_info">
          <p className="Module_info--label">Hod:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Lecturer:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Tutor:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <hr className="Module_line" />
      </div>

      <div className="Module">
        <h5 className="Module_name">Computer Architecture</h5>

        <div className="Module_info">
          <p className="Module_info--label">Hod:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Lecturer:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <div className="Module_info">
          <p className="Module_info--label">Tutor:</p>
          <p className="Module_info--name">Ncube M</p>
        </div>

        <hr className="Module_line" />
      </div>

      <button className="Card_button">Learn</button>
   </article>
  );
};
