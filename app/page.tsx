'use client';
import react, {useEffect, useState} from 'react';
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
import { Course, CourseModule, ModuleTopic, TopicLesson } from './utils/types';

function Home() {
  //States
  const [courses, setCourses] = useState<Course[]>([]);


  useEffect(() => {
  // // Get courses

  axios.get('http://127.0.0.1:3001/getCourses')
  .then((courses) => {
    setCourses(courses.data);
  })
  .catch((err) => {
    console.log(err);
  })

  
 },[])

  return (
    <div className="App">
      <Header />
      <Navbar />
      <section className="hero">
        <Profile />
      </section>

      <main className="Main App_main">
        <ModulesCard courses={courses}/>

        <TimetableCard courses={courses}/>

        <IcassCard />

        <AttendanceCard />
      </main>
      <Topic />
      <ModulesList courses={courses}/>
      <Footer />
    </div>
  );
}

export default Home;
