import react from 'react';
import { AttendanceCard } from '../AttendanceCard/AttendanceCard';
import { IcassCard } from '../IcassCard/IcassCard';
import { ModulesCard } from '../ModulesCard/ModulesCard';
import { TimetableCard } from '../TimetableCard/TimetableCard';

export const StudentsDashboard = ({courses = []}) => {
  return (
    <>
      <ModulesCard courses={courses}/>

      <TimetableCard courses={courses}/>

      <IcassCard />

      <AttendanceCard />
    </>
  )
}
