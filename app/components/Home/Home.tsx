import React, { useEffect } from 'react';
import { Carousel, Accordion, Button, Spinner, Card, Container, Form, FormText, FormLabel } from 'react-bootstrap';
import './Home.scss';
import styled from 'styled-components';
import { Course } from '@/app/utils/types';
import { cards, sliders, testimonials } from './assets/landingPageContent.js';
import Image from 'next/image';
import profile from './assets/profile.png';

interface HomeProps {
  courses: Course[];
}

export const Home: React.FC<HomeProps> = ({ courses }) => {
  return (
    <section className="Home">
    <Carousel fade>
      {
        sliders.map((slider) => (
          <Carousel.Item>
            <div className="Home__carousel">
            </div>
            <Carousel.Caption className='Home__slider'>
              <h2 className="Home__course-title">{ slider.title }</h2>
              <p className='Home__course-text'>{ slider.text }</p>
              <Button className="Home__course-signup">Signup Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }    
    </Carousel>

    <div className="Home__cards">
      {
        cards.map((card) => (
          <Card className='text-center' key={card.title}>
            <Card.Header>
              {card.header}
            </Card.Header>

            <Card.Body>
              <Card.Title>
                {card.title}
              </Card.Title>

              <Card.Text>
                {card.text}
              </Card.Text>

              <Button>Enrol Now</Button>
            </Card.Body>

            <Card.Footer className='text-muted'>{card.footer}</Card.Footer>
          </Card>
        ))
      }
    </div>
   
    <div className="Home__Testimonials-containter">
    <h3>Here is what our alumni says</h3>
      <Carousel fade>
        
        {
          testimonials.map((testimonial) => (
            <Carousel.Item className="Home__testimonials">
              <div className="Home__testimonials-background">
                
              </div>
              <Carousel.Caption  className="Home__testimonials-wrapper">
                <Card className="Home__testimonials-card">
                  <Card.Header className='Home__testimonials-header'>
                    <div className="Home__testimonials-image">
                      <Image src={profile} alt={`${testimonial.name}'s photo`} width={50}/>
                    </div>
                  </Card.Header>

                  

                  <Card.Body>
                    <blockquote className='blockquote mb-0'>
                      <p>
                        {' '}
                          {testimonial.quote}
                        {' '}
                      </p>

                      <footer className='blockquote-footer'>
                        {testimonial.name}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }    
      </Carousel>
    </div>

    <Container className='my-5'>
      <h4>Frequently Asked Questions</h4>
      {
        !courses
          ? (<Spinner animation='grow' variant='info' />)
          : <Accordion defaultActiveKey="0">
              {
                courses?.map((course: Course) => (
                  <Accordion.Item eventKey={course.courseName} key={course.courseName}>
                    <Accordion.Header className="Home__header">{course.courseName}</Accordion.Header>
                    <Accordion.Body className='Home__body'>
                      {course.courseSummary}
                    </Accordion.Body>
                </Accordion.Item>
                ))
              }
            </Accordion>
      }
    </Container>

    <Container className='my-5 Home__form'>
      <h3>Get in touch</h3>
      <p>Use the form below to get in touch with us concerning any question you may have.</p>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address:</Form.Label>
          <Form.Control type='email' placeholder='Enter your valid email' />
          <Form.Text className='text-muted'>We will only use it to communicate with you about our courses</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicTel'>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type='tel' placeholder='Enter your phone number' />
          <Form.Text className='text-muted'>We will only use it to communicate with you about our courses</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicSelect'>
          <Form.Label>Course:</Form.Label>
          <Form.Select aria-label='Courses select' className='form-control'>
            <option>Select a course</option>
            <option value={`Frontend dev`}>Frontend dev</option>
            <option value={`Backend dev`}>Backend dev</option>
            <option value={`Fullstack dev`}>Fullstack dev</option>
            <option value={`Python programming`}>Python programming</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Message:</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder='Say more....' />
        </Form.Group>

        <Button type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
    
  </section>
  );
};
