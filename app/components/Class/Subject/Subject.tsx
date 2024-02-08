import React from 'react';
import './Subject.css';
import Image from 'next/image';
import books from '../../../assets/books.jpg';
import { HLine } from '../../HLine/HLine';

export const Subject = () => {
  return (
    <section className="Subject Class__card">
        <h3 className="Subject__heading">Modules</h3>

        <Image src={books} alt='Subjects icon' className='Subject__icon'/>

        <div className="Subject__details"> 
          <h4 className="Subject__name">Web Development</h4>
          <h5 className="Subject__hod">HOD: Ncube</h5>
          <h5 className="Subject__lecturer">LECTURER: Ncube</h5>
          <h5 className="Subject__tutor">TUTOR: Ncube</h5>
        </div>

        <HLine />

        <div className="Subject__details"> 
          <h4 className="Subject__name">Web Development</h4>
          <h5 className="Subject__hod">HOD: Ncube</h5>
          <h5 className="Subject__lecturer">LECTURER: Ncube</h5>
          <h5 className="Subject__tutor">TUTOR: Ncube</h5>
        </div>
        
        <HLine />

        <div className="Subject__details"> 
          <h4 className="Subject__name">Web Development</h4>
          <h5 className="Subject__hod">HOD: Ncube</h5>
          <h5 className="Subject__lecturer">LECTURER: Ncube</h5>
          <h5 className="Subject__tutor">TUTOR: Ncube</h5>
        </div>

        <HLine />

        <div className="Subject__details"> 
          <h4 className="Subject__name">Web Development</h4>
          <h5 className="Subject__hod">HOD: Ncube</h5>
          <h5 className="Subject__lecturer">LECTURER: Ncube</h5>
          <h5 className="Subject__tutor">TUTOR: Ncube</h5>
        </div>
      </section>
  );
}
