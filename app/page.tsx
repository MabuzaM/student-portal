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


function Home() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section className="hero">
        <Profile />
      </section>

      <main className="Main App_main">
        <ModulesCard />

        <TimetableCard />

        <IcassCard />

        <AttendanceCard />
      </main>
      <Topic />
      <ModulesList />
      <TopicList />
      <Footer />
    </div>
  );
}

export default Home;
