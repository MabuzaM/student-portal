import React, { useEffect, useState } from 'react';
import './MainNavbar.scss';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Mobilenav } from '../MobileNav/MobileNav';
import { Student, Employee } from '@/app/utils/types';

interface MainNavbarProps {
  student: Student | undefined;
  staff: Employee | undefined;
  onLogout: () => {}
}

export const MainNavbar: React.FC<MainNavbarProps> = ({ student, staff, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  const renderNavLinks = (staff: Employee | undefined,  student: Student | undefined) => {
    if (student && !staff) {
      return (
        <>
          <li className="Nav_item">
            <NavLink to="/student-profile" className="Nav_link">Profile</NavLink>
          </li>

          <li className="Nav_item">
            <NavLink to="/course-info" className="Nav_link">Course&nbsp;Info</NavLink>
          </li>

          <li className="Nav_item">
            <NavLink to="/learn" className="Nav_link">
              Learn
            </NavLink>
          </li>

          <li className='Nav_item'>
            <NavLink to="/dashboard" className="Nav_link">
              Dashboard
            </NavLink>
          </li>

          <li className="Nav_item">
            <NavLink to="/" className="Nav_link" onClick={onLogout}>Logout</NavLink>
          </li>
        </>
      );
    } else if (staff && !student) {
      return (
        <>
          <li className="Nav_item">
            <NavLink to="/overview" className="Nav_link">Dashboard Overview</NavLink>
          </li>

          {/* <li className='Nav_item'>
            <NavLink to="/admin-dashboard" className="Nav_link">
              Admin&nbsp;Dashboard
            </NavLink>
          </li> */}

          <li className="Nav_item">
          <NavLink to="/" className="Nav_link" onClick={onLogout}>Logout</NavLink>
          </li>
        </>
      );
    }
  }

  return (
    <nav className="Nav">

      <ul className={`Nav__list ${!isOpen ? 'Nav__list--active' : ''}`}>
        <li className="Nav_item">
          <NavLink to="/" className="Nav_link">Home</NavLink>
        </li>

        {
          renderNavLinks(staff, student)
        }

        <li className="Nav_item">
          <NavLink to="/studentRegistration" className="Nav_link">Apply&nbsp;Now</NavLink>
        </li>
  
        {/* <li className="Nav_item">
          <NavLink to="/student-login" className="Nav_link">Student&nbsp;Login</NavLink>
        </li>
  
        <li className="Nav_item">
          <NavLink to="/staff-login" className="Nav_link">Staff&nbsp;Login</NavLink>
        </li>  */}
   
      </ul>

      <div className="Nav__mobile">
        <div className="Nav__hamburger" onClick={toggleNav}>
          <span className="Nav__hamburger-bar"></span>
          <span className="Nav__hamburger-bar"></span>
          <span className="Nav__hamburger-bar"></span>
        </div>

        <Mobilenav student={student} staff={staff} isOpen={isOpen}/>
      </div>
    </nav>
  );
};
