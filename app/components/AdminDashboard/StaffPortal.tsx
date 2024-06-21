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
// import { Profile } from "../Profile/StudentProfile";
import { StudentRegistration } from "../StudentRegistration/StudentRegistration";
import { Students } from "../Students/Students";
import { Course, Employee, Student } from "@/app/utils/types";

interface StaffPortalProps {
  courses: Course[],
  employees: Employee[],
  students: Student[]
}

export const StaffPortal: React.FC<StaffPortalProps> = ({courses, employees, students}) => {
  return (
    <div className="Main__staff">
      <div className="Main__staff-content">            
        <Routes>
          {/* <Route
            path='/staff-profile'
            element={ <Profile />}
          /> */}

          <Route
            path='/courses'
            element = {<ModulesList courses={courses}/>}
          />

          <Route
            path='/staff-registration'
            element = {<EmployeeRegistration courses={courses}/>}
          />

          <Route
            path='/student-registration'
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
