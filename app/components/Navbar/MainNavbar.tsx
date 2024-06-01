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

export const MainNavbar = ({ user = undefined }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="Nav">

      <ul className={`Nav__list ${!isOpen ? 'Nav__list--active' : ''}`}>
        <li className="Nav_item">
          <NavLink to="/" className="Nav_link">Home</NavLink>
        </li>

        {
          user && user?.role === 'student' 
            ? (
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
                    <NavLink to="/logout" className="Nav_link">Logout</NavLink>
                  </li>
                </>
                )
            : (
                <>
                  <li className="Nav_item">
                    <NavLink to="/studentRegistration" className="Nav_link">Apply&nbsp;Now</NavLink>
                  </li>

                  <li className="Nav_item">
                    <NavLink to="/login" className="Nav_link">Login</NavLink>
                  </li>
                </>
              )
        }        
      </ul>

      <div className="Nav__mobile">
        <div className="Nav__hamburger" onClick={toggleNav}>
          <span className="Nav__hamburger-bar"></span>
          <span className="Nav__hamburger-bar"></span>
          <span className="Nav__hamburger-bar"></span>
        </div>

        <Mobilenav user={user} isOpen={isOpen}/>
      </div>
    </nav>
  );
};
