import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.scss';
import { Employee, Student } from '@/app/utils/types';

interface MobileNavProps {
  student: Student | undefined;
  staff: Employee | undefined;
  isOpen: boolean;
}

export const Mobilenav: React.FC<MobileNavProps> = ({student, staff, isOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNav = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <nav className={`MobileNav`}>
      <ul className={`MobileNav__list ${isOpen ? 'MobileNav__list--active' : ''}`}>
        <li className="MobileNav__item">
          <NavLink to="/" className="MobileNav__link">Home</NavLink>
        </li>

        {
          student
            ? (
                <>
                  <li className="MobileNav__item">
                    <NavLink to="/student-profile" className="MobileNav__link">Profile</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/course-info" className="MobileNav__link">Course Info</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/learn" className="MobileNav__link">Learn</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/logout" className="MobileNav__link">Logout</NavLink>
                  </li>
                </>
                )
            : staff
              ? 
              (
                <>
                  <li className="MobileNav__item">
                    <NavLink to="/admin-dashboard" className="MobileNav__link">Admin Dashboard</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/courses" className="MobileNav__link">Courses</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/students" className="MobileNav__link">Students</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/logout" className="MobileNav__link">Logout</NavLink>
                  </li>
                </>
                ) :
              (
                <>
                  <li className="MobileNav__item">
                    <NavLink to="/studentRegistration" className="MobileNav__link">Apply&nbsp;Now</NavLink>
                  </li>

                  <li className="MobileNav__item">
                    <NavLink to="/login" className="MobileNav__link">Login</NavLink>
                  </li>
                </>
              )
        }        
      </ul>
    </nav>
  )
}
