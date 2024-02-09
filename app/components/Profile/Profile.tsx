import React from 'react';
import './Profile.scss';
import profile_picture from './assets/profilePicture.png';

export const Profile = () => {
  return (
    <article className="Profile">
      <div className="Profile_photoBG">
        <img
          src={profile_picture}
          alt="profile"
          className="Profile_photo"
        />
      </div>

      <div className="Profile_info">
        <p>P1828629D</p>
        <p>Asher Ncube</p>
        <p>Bachelor in Software Engineering</p>
        <p>NQF Level 5</p>
        <p>Faculty of Information and Communication Technology</p>
      </div>
    </article>
  );
};
