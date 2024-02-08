import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <a href="#" className="Nav__link">Profile</a>
        </li>

        <li className="Nav__item">
          <a href="#" className="Nav__link">Classes</a>
        </li>

        <li className="Nav__item">
          <a href="#" className="Nav__link">Exams</a>
        </li>

        <li className="Nav__item">
          <a href="#" className="Nav__link">Admin</a>
        </li>
      </ul>
    </nav>
  );
}