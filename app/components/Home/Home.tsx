import React, { useEffect } from 'react';
import { Carousel, Accordion } from 'react-bootstrap';
import './Home.scss';
import styled from 'styled-components';
import { Course } from '@/app/utils/types';

export const Home = ({courses=[]}) => {
  return (
    <section className="Home">
      {/* <div className="Home__carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Carousel text</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Carousel text</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Carousel text</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div> */}

      <Accordion defaultActiveKey="0">
        {
          courses.map((course: Course) => (
            <Accordion.Item eventKey={course.courseName} key={course.courseName}>
              <Accordion.Header className="Home__header">{course.courseName}</Accordion.Header>
              <Accordion.Body className='Home__body'>
                {course.courseSummary}
              </Accordion.Body>
          </Accordion.Item>
          ))
        }
      </Accordion>
    </section>
  )
}
// function userState(arg0: never[]): [any, any] {
//   throw new Error('Function not implemented.');
// }

