import React from 'react';
import Image from 'next/image';
import logo from './assets/logo.png';
import profile from './assets/profile.png';
import './Header.scss';
import { Employee, Student } from '@/app/utils/types';

interface HeaderProps {
  student: Student | undefined;
  staff: Employee | undefined;
}

export const Header: React.FC<HeaderProps> = ({ student, staff }) => {
  return (
    <header className="Header">
      <Image src={logo} className="Header_logo" alt="logo" width={100} />

      <h1 className="Header_title">
        {student ? 'EduPalm' : staff ? 'EduPalm' : 'Online Coding School'}
      </h1>

      {student && 
        <div className="Header_profile-bg" title={student?.studentName}>
          <Image src={profile} className="Header_profile" width={20} alt="profile avatar" />
        </div>
      }

      {staff && 
        <div className="Header_profile-bg" title={staff?.employeeName}>
          <Image src={profile} className="Header_profile" width={20} alt="profile avatar" />
        </div>
      }
    </header>
  )
};
