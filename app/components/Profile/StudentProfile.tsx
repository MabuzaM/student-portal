'use client';
import React, { useEffect, useState } from 'react';
import './StudentProfile.scss';
import Image from 'next/image';
import Profile_picture from './assets/ProfilePicture.png';
import axios from 'axios';
import { Student } from '@/app/utils/types';

export const StudentProfile = ({user = undefined}) => {
  const [student, setStudent] = useState<Student>();
  return (
    <article className="StudentProfile">
      <div className="StudentProfile_photoBG">
        <Image
          src={Profile_picture}
          alt="StudentProfile"
          width={200}
          className="StudentProfile_photo"
        />
      </div>

      <div className="StudentProfile_info">
        <p>{user?.studentNumber}</p>
        <p>{`${user?.studentName} ${user?.surname}`}</p>
        {/* <p>{student?.}</p> */}
        {/* <p>{student?.level}</p> */}
        <p>{user?.nationalId}</p>
      </div>
    </article>
  );
};
