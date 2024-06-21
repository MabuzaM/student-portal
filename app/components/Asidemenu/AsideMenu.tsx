import react from 'react';
import { NavLink } from 'react-router-dom';
import './AsideMenu.scss';

export const AsideMenu = () => {
  return (
    <aside className='AsideMenu'>
        <nav className="AsideMenu__nav">
          <ul className="AsideMenu__list">
            {/* <li className="AsideMenu__item">
              <NavLink
                to="admin-dashboard/"
                className={`AsideMenu__link ${(navData) => navData.isActive ? 'active-link': ''}`}
              
              >Dashboard</NavLink>
            </li> */}

            <li className="AsideMenu__item">
              <NavLink to="/overview" className="AsideMenu__link">Dashboard Overview</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/staffProfile" className="AsideMenu__link">Profile</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink
                to="/add-course"
                className={`AsideMenu__link ${(navData) => navData.isActive ? 'active-link': ''}`}
              >Add Course</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/add-module" className="AsideMenu__link">Add Module</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/add-topics" className="AsideMenu__link">Add Topics</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/add-lesson" className="AsideMenu__link">Add Lessons</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/add-tasks" className="AsideMenu__link">Add Tasks</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/students" className="AsideMenu__link">Students</NavLink>
            </li>

            <li className="AsideMenu__item">
              <NavLink to="/staff-registration" className="AsideMenu__link">Register Employee</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
  );
};
