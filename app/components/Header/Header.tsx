import React from 'react';
import Image from 'next/image';
import logo from './assets/logo.png';
import profile from './assets/profile.png';
import './Header.scss';
import { Employee, Student } from '@/app/utils/types';

interface HeaderProps {
  user: Student | Employee;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="Header">
      <Image src={logo} className="Header_logo" alt="logo" width={100} />

      <h1 className="Header_title">
        {user ? 'EduPalm' : 'Online Coding School'}
      </h1>

      {user && 
        <div className="Header_profile-bg" title={user?.studentName}>
          <Image src={profile} className="Header_profile" width={20} alt="profile avatar" />
        </div>
      }
    </header>
  )
};
