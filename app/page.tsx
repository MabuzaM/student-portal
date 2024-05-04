'use client';
import {useEffect, useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { AttendanceCard } from './components/AttendanceCard/AttendanceCard';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { IcassCard } from './components/IcassCard/IcassCard';
import { ModulesCard } from './components/ModulesCard/ModulesCard';
import { ModulesList } from './components/ModulesList/ModulesList';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { TimetableCard } from './components/TimetableCard/TimetableCard';
import { Topic } from './components/Topic/Topic';
import { TopicList } from './components/TopicList/TopicList';
import axios from 'axios';
import { Course, CourseModule, Employee, ModuleTopic, Student, TopicLesson } from './utils/types';
import { StudentRegistration } from './components/StudentRegistration/StudentRegistration';
import { EmployeeRegistration } from './components/EmployeeRegistration/EmployeeRegistration';
import { Route, Routes, HashRouter, NavLink, useNavigation } from 'react-router-dom';
import { StudentsDashboard } from './components/StudentsDashboard/StudentsDashboard';
import { AddCourse } from './components/AddCourse/AddCourse';
import { AddModule } from './components/AddModule/AddModule';
import { AddTopic } from './components/AddTopic/AddTopic';
import { AddLesson } from './components/AddLesson/AddLesson';
import { DashboardOverView } from './components/DashboardOverview/DashboardOverview';
import { Students } from './components/Students/Students';
import { AddTask } from './components/AddTasks/AddTask';


function App() {
  //States
  const [courses, setCourses] = useState<Course[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
  // // Get courses

  axios.get('http://127.0.0.1:5000/courses')
  .then((courses) => {
    setCourses(courses.data);
  })
  .catch((err) => {
    console.log(err);
  })

  axios.get('http://127.0.0.1:5000/employees')
  .then((employees) => {
    setEmployees(employees.data);
  })
  .catch((err) => {
    console.log(err);
  })

  axios.get('http://127.0.0.1:5000/students')
  .then((students) => {
    setStudents(students.data);
  })
  .catch((err) => {
    console.log(err);
  })
 },[])

  return (
    <div className="App">
      <HashRouter>
      <Header />  
      <section className="App__hero">
        <Navbar />
       </section>
      <main className="Main App_main">
        <aside className='Aside'>
          <nav className="Nav Aside__nav">
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
        <div className="Main__content">
          <Routes>
              <Route
                path='/'
                element = {<StudentsDashboard courses={courses}/>}
              />            

            <Route
              path='/profile'
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
              element = {<DashboardOverView />}
            />

            <Route
              path='/students'
              element = {<Students students={students}/>}
            />
            
          </Routes>
        </div>      
      </main>      
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
