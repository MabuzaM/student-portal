import React, { useEffect, useState } from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_list">
        <li className="Nav_item">
          <NavLink to="/" className="Nav_link">Dashboard</NavLink>
        </li>


        <li className="Nav_item">
          <NavLink to="/profile" className="Nav_link">Profile</NavLink>
        </li>

        <li className="Nav_item">
          <NavLink to="/courses" className="Nav_link">Learn</NavLink>
        </li>

        <li className="Nav_item">
          <NavLink to="/studentRegistration" className="Nav_link">Apply Now</NavLink>
        </li>

        <li className="Nav_item">
          <NavLink to="/staffRegistration" className="Nav_link">Register Employee</NavLink>
        </li>

        <li className="Nav_item">
          <a href="#" className="Nav_link">Attendance</a>
        </li>

        <li className="Nav_item">
          <a href="#" className="Nav_link">Exams</a>
        </li>
      </ul>
    </nav>
  );
};
