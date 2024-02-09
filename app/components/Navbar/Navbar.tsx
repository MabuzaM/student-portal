import React from 'react';
import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_list">
        <li className="Nav_item">
          <a href="#" className="Nav_link">Profile</a>
        </li>

        <li className="Nav_item">
          <a href="#" className="Nav_link">Dashboard</a>
        </li>

        <li className="Nav_item">
          <a href="#" className="Nav_link">Classes</a>
        </li>

        <li className="Nav_item">
          <a href="#" className="Nav_link">Timetable</a>
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
