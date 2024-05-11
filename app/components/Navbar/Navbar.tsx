import React, { useEffect, useState } from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom';

export const Navbar = ({ user = undefined }) => {
  return (
    <nav className="Nav">
      <ul className="Nav_list">
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
                    <NavLink to="/course-info" className="Nav_link">Course Info</NavLink>
                  </li>

                  <li className="Nav_item">
                    <NavLink to="/learn" className="Nav_link">Learn</NavLink>
                  </li>

                  <li className="Nav_item">
                    <NavLink to="/logout" className="Nav_link">Logout</NavLink>
                  </li>
                </>
                )
            : (
                <>
                  <li className="Nav_item">
                    <NavLink to="/studentRegistration" className="Nav_link">Apply Now</NavLink>
                  </li>

                  <li className="Nav_item">
                    <NavLink to="/login" className="Nav_link">Login</NavLink>
                  </li>
                </>
              )
        }        
      </ul>
    </nav>
  );
};
