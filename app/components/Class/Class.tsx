import React from 'react';
import './Class.css';
import { Subject } from './Subject/Subject';
import { Timetable } from './Timetable/Timetable';
import { Assessment } from './Assessments/Assessment';
import { Attendance } from './Attendance/Attendance';



export default function Class() {
  return (
    <div className="Class">      
      <Subject />

      <Timetable />

      <Assessment />
      
      <Attendance />
    </div>
  );
}
