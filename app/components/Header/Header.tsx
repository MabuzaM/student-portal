import React from 'react';
import logo from './assets/logo.png';
import profile from './assets/profile.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header_logo" alt="logo" />
      <h1 className="Header_title">
        Student Portal
      </h1>

      <div className="Header_profile-bg">
        <img src={profile} className="Header_profile" alt="profile avatar" />
      </div>
    </header>
  )
};
