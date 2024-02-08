import React from 'react';
import './Profile.css'
import Image from 'next/image';
import profile from '../../assets/profile.jpeg';

export default function Profile() {
  let user = "Owethu";

  return (
    <article className="Profile">
      <div className="Profile__image">
        <Image 
          src={profile} 
          alt={`${user}'s profile photo`}
          className='Profile__photo'
        />
      </div>

      <div className="Profile__info">
        <p className="Profile__id">1234566</p>
        <p className="Profile__name">Owethu Ncube</p>
        <p className="Profile__course">Bachelor Software Engineering</p>
        <p className="Profile__level">NQF8</p>
        <p className="Profile__faculty">Information Technology</p>
      </div>
    </article>
  );
}
