'use client';
import {useEffect, useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainNavbar } from './components/Navbar/MainNavbar';
import axios from 'axios';
import { Course, Employee, Student } from './utils/types';
import { Route, Routes, HashRouter, Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import { StudentsDashboard } from './components/StudentsDashboard/StudentsDashboard';
import { Home } from './components/Home/Home';
import { StudentProfile } from './components/Profile/StudentProfile';
import { StudentRegistration } from './components/StudentRegistration/StudentRegistration';
import { ModulesList } from './components/ModulesList/ModulesList';
import { Courses } from './courses';
import { Mobilenav } from './components/MobileNav/MobileNav';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

function App() {
  //States
  const [courses, setCourses] = useState<Course[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [user, setUser] = useState<Student>();
  // const navigate = useNavigate();

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

 const onInputChange = (e) => {
  if (e.target.name === 'username') {
    setUsername(e.target.value);
  } else {
    setPassword(e.target.value);
  }
 }

 const onLogin = (e) => {
  e.preventDefault();

  const loggedInUser: Student | undefined = students.find((student: Student) => ((student.email === username || student.studentNumber === username) && (student.password === password)));

  // console.log(loggedInUser);
 
  if (loggedInUser) {
   
    // localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    if (loggedInUser){
      // navigate('/student-portal', { replace: true });
    }
    
    // if (loggedInUser?.role === 'student') {
    //   return (
    //     <Navigate to={'/student-portal'} replace={true}/>
    //   )
    // } else if (loggedInUser?.role === 'adminStaff') {
    //   return (
    //     <Navigate to={'/staff-portal'} replace={true} />
    //   )
    // }
  } else {
    alert("You are either not registered or you entered incorrect username and password combination");
  }
 }

 const handleLogin = (role: string) => {
  
 }

  return (
    <>
     <Header user={user}/>
     <HashRouter>
      <div className="App">
        <MainNavbar user={user} />
    
        <main className="Main App_main">
          
          <Routes>
            <Route
              path='/'
              element={<Home courses={courses}/>}
            />
            <Route
              path='/login'
              element={!user 
                ? <LoginForm
                    username = {username}
                    password={password}
                    onInputChange={onInputChange}
                    onLogin={onLogin}
              /> : <Navigate to="/student-portal" replace/>}
            />

            <Route
              path='/dashboard'
              element={user && user.role === 'student'
                ? <StudentsDashboard courses={courses} user={user}/>
                : <Navigate to="/login" replace/>}
            />

            <Route
              path='/student-profile'
              element={user  && user.role === 'student'
                ? <StudentProfile user={user}/>
                : <Navigate to="/login" replace/>}
            />

            <Route
              path='/learn'
              element={user  && user.role === 'student'
                ? <ModulesList courses={courses} user={user}/>
                : <Navigate to="/login" replace/>}
            />

            <Route
              path='/course-info'
              element={user  && user.role === 'student'
                ? <CourseInfo courses={courses} user={user}/>
                : <Navigate to="/login" replace/>}
            />

            <Route
              path='/studentRegistration'
              element={!user
                ? <StudentRegistration courses={courses}/>
                : <Navigate to="/student-portal" replace/>}
            />
          </Routes>                     
        </main>
      </div>
      </HashRouter> 
      <Footer />
    </>
  );
}

export default App;
