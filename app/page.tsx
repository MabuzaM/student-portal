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
import { StaffPortal } from './components/AdminDashboard/StaffPortal';
import { StaffLogin } from './components/StaffLogin/StaffLogin';
import { AsideMenu } from './components/Asidemenu/AsideMenu';
import { DashboardOverView } from './components/DashboardOverview/DashboardOverview';
import { AddCourse } from './components/AddCourse/AddCourse';
import { AddLesson } from './components/AddLesson/AddLesson';
import { AddModule } from './components/AddModule/AddModule';
import { AddTask } from './components/AddTasks/AddTask';
import { AddTopic } from './components/AddTopic/AddTopic';
import { EmployeeRegistration } from './components/EmployeeRegistration/EmployeeRegistration';
import { Students } from './components/Students/Students';

function App() {
  //States
  const [courses, setCourses] = useState<Course[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [student, setStudent] = useState<Student>();
  const [staff, setStaff] = useState<Employee>();
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

//STUDENT LOGIN FORM LOGIC

 const onStudentInputChange = (e) => {
  if (e.target.name === 'username') {
    setUsername(e.target.value);
  } else {
    setPassword(e.target.value);
  }
 }

 const onStudentLogin = (e) => {
  e.preventDefault();

  const loggedInStudent: Student | undefined = students.find((student: Student) => ((student.email === username || student.studentNumber === username) && (student.password === password)));

  // console.log(loggedInUser);
 
  if (loggedInStudent) { 
    setStudent(loggedInStudent);
    setStaff(undefined);
  
  } else {
    alert("You are either not registered or you entered incorrect username and password combination");
  }
 }

 //STAFF LOGIN FORM LOGIC

 const onStaffInputChange = (e) => {
  if (e.target.name === 'username') {
    setUsername(e.target.value);
  } else {
    setPassword(e.target.value);
  }
 }

 const onStaffLogin = (e) => {
  e.preventDefault();

  const loggedInStaff: Employee | undefined = employees?.find((employee: Employee) => ((employee.employeeEmail === username || employee.employeeNumber === username) && (employee.employeePassword === password)));
 
  if (loggedInStaff) { 
    setStaff(loggedInStaff);
    setStudent(undefined);
  
  } else {
    alert("You are either not registered or you entered incorrect username and password combination");
  }
 }

 const handleLogout = () => {
  if (student) {
    setStudent(undefined);
  } else if (staff) {
    setStaff(undefined);
  } else {
    setStaff(undefined);
    setStudent(undefined);
  }
 }

  return (
    <>
     <Header student={student} staff={staff}/>
     <HashRouter>
      <div className="App">
        <MainNavbar student={student} staff={staff} onLogout={handleLogout}/>
        <main className="Main App_main">      
          
          <Routes>
            <Route
              path='/'
              element={<Home courses={courses}/>}
            />
            <Route
              path='/student-login'
              element={!student 
                ? <LoginForm
                    username = {username}
                    password={password}
                    onInputChange={onStudentInputChange}
                    onLogin={onStudentLogin}
              /> : <Navigate to="/dashboard" replace/>}
            />

            <Route
              path='/dashboard'
              element={student
                ? <StudentsDashboard courses={courses} user={student}/>
                : <Navigate to="/student-login" replace/>}
            />

            <Route
              path='/student-profile'
              element={student
                ? <StudentProfile user={student}/>
                : <Navigate to="/student-login" replace/>}
            />

            <Route
              path='/learn'
              element={student
                ? <ModulesList courses={courses} user={student}/>
                : <Navigate to="/student-login" replace/>}
            />

            <Route
              path='/course-info'
              element={student
                ? <CourseInfo courses={courses} user={student}/>
                : <Navigate to="/student-login" replace/>}
            />

            <Route
              path='/studentRegistration'
              element={!student
                ? <StudentRegistration courses={courses}/>
                : <Navigate to="/student-portal" replace/>}
            />


            <Route
              path='/staff-login'
              element={!staff
                ? <StaffLogin
                    username = {username}
                    password={password}
                    onStaffInputChange={onStaffInputChange}
                    onStaffLogin={onStaffLogin}
              /> : <Navigate to="/overview" replace/>}
            />

            <Route
              path='/overview'
              element={staff
                ? <DashboardOverView courses={courses} students={students} employees={employees} staff={staff}/>
                : <Navigate to="/staff-login" replace/>}
            />

            <Route
              path='/add-course'
              element={
                staff
                  ? <AddCourse employees={employees} staff={staff} />
                  : <Navigate to={`/staff-login`} replace/>
              }
            />

            <Route
              path='/add-lesson'
              element={
                staff
                  ? <AddLesson courses={courses} staff={staff} />
                  : <Navigate to={`/staff-login`} replace/>
              }
            />

            <Route
              path='/add-module'
              element={
                staff
                  ? <AddModule courses={courses} employees={employees} staff={staff} />
                  : <Navigate to={`/staff-login`} replace/>
              }
            />

            <Route
              path='/add-tasks'
              element={
                staff
                  ? <AddTask courses={courses} staff={staff} />
                  : <Navigate to={`/staff-login`} replace/>
              }
            />

            <Route
              path='/add-topics'
              element={
                staff
                  ? <AddTopic courses={courses} staff={staff} />
                  : <Navigate to={`/staff-login`} replace/>
              }
            />

            <Route
              path='/students'
              element={staff
                ? <Students staff={staff} />
                : <Navigate to="/staff-login" replace/>}
            />

            <Route
              path='/staff-registration'
              element={staff
                ? <EmployeeRegistration courses={courses} staff={staff} />
                : <Navigate to="/staff-login" replace/>}
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
