import react from 'react';
import { AttendanceCard } from '../AttendanceCard/AttendanceCard';
import { IcassCard } from '../IcassCard/IcassCard';
import { ModulesCard } from '../ModulesCard/ModulesCard';
import { TimetableCard } from '../TimetableCard/TimetableCard';
import './StudentsDashboard.scss';

export const StudentsDashboard = ({courses = []}) => {
  return (
    <section className='Dashboard'>
      <ModulesCard courses={courses}/>

      <TimetableCard courses={courses}/>

      <IcassCard />

      <AttendanceCard />
    </section>
  )
}
