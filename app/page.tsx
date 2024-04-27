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
import { Course, CourseModule, Employee, ModuleTopic, TopicLesson } from './utils/types';
import { StudentRegistration } from './components/StudentRegistration/StudentRegistration';
import { EmployeeRegistration } from './components/EmployeeRegistration/EmployeeRegistration';
import { BrowserRouter, Route, Routes, HashRouter, createBrowserRouter } from 'react-router-dom';
import { StudentsDashboard } from './components/StudentsDashboard/StudentsDashboard';
import { AddCourse } from './components/AddCourse/AddCourse';
import { AddModule } from './components/AddModule/AddModule';
import { AddTopic } from './components/AddTopic/AddTopic';
import { AddLesson } from './components/AddLesson/AddLesson';

function App() {
  //States
  const [courses, setCourses] = useState<Course[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

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
 },[])

  return (
    <div className="App">
      <HashRouter>
      <Header />  
      <section className="App__hero">
        <Navbar />
       </section>
      <main className="Main App_main">
          <AddLesson courses={courses}/>
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
            
          </Routes>

      </main>

      {/* <Topic /> */}
      
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
