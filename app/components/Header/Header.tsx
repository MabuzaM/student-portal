import React from 'react';
import Image from 'next/image';
import logo from './assets/logo.png';
import profile from './assets/profile.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <Image src={logo} className="Header_logo" alt="logo" width={200}/>
      <h1 className="Header_title">
        Student Portal
      </h1>

      <div className="Header_profile-bg">
        <Image src={profile} className="Header_profile" width={20} alt="profile avatar" />
      </div>
    </header>
  )
};
