import React from "react";
import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { AddCourse } from "../AddCourse/AddCourse";
import { AddLesson } from "../AddLesson/AddLesson";
import { AddModule } from "../AddModule/AddModule";
import { AddTask } from "../AddTasks/AddTask";
import { AddTopic } from "../AddTopic/AddTopic";
import { DashboardOverView } from "../DashboardOverview/DashboardOverview";
import { EmployeeRegistration } from "../EmployeeRegistration/EmployeeRegistration";
import { ModulesList } from "../ModulesList/ModulesList";
import { Profile } from "../Profile/StudentProfile";
import { StudentRegistration } from "../StudentRegistration/StudentRegistration";
import { Students } from "../Students/Students";

export const StaffPortal = () => {
  return (
    <div className="Main__staff">
      <aside className='Aside'>
        <nav className="Aside__nav">
          <ul className="Aside__list">
            <li className="Aside__item">
              <NavLink
                to="/"
                className={`Aside__link ${(navData) => navData.isActive ? 'active-link': ''}`}
              
              >Dashboard</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/overview" className="Aside__link">Overview</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/staffProfile" className="Aside__link">Profile</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink
                to="/addCourse"
                className={`Aside__link ${(navData) => navData.isActive ? 'active-link': ''}`}
              >Add Course</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/module" className="Aside__link">Add Module</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/topics" className="Aside__link">Add Topics</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/lessons" className="Aside__link">Add Lessons</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/tasks" className="Aside__link">Add Tasks</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/students" className="Aside__link">Students</NavLink>
            </li>

            <li className="Aside__item">
              <NavLink to="/staffRegistration" className="Aside__link">Register Employee</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="Main__staff-content">            
        <Routes>
          <Route
            path='/staffProfile'
            element={ <Profile />}
          />

          <Route
            path='/courses'
            element = {<ModulesList courses={courses}/>}
          />

          <Route
            path='/staffRegistration'
            element = {<EmployeeRegistration courses={courses}/>}
          />

          <Route
            path='/studentRegistration'
            element = {<StudentRegistration courses={courses}/>}
          />

          <Route
            path='/addCourse'
            element = {<AddCourse employees={employees}/>}
          />

          <Route
            path='/module'
            element = {<AddModule courses={courses} employees={employees}/>}
          />

          <Route
            path='/topics'
            element = {<AddTopic courses={courses}/>}
          />

          <Route
            path='/lessons'
            element = {<AddLesson courses={courses}/>}
          />

          <Route
            path='/tasks'
            element = {<AddTask courses={courses}/>}
          />

          <Route
            path='/overview'
            element = {
              <DashboardOverView
                courses={courses}
                employees={employees}
                students={students}
              />
            }
          />

          <Route
            path='/students'
            element = {<Students students={students}/>}
          />                
        </Routes>
      </div> 
    </div>     
  )
}
