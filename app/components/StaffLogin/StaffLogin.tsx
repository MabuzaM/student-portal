import react from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const StaffLogin = ({username = '', password = '', onStaffInputChange = () => {}, onStaffLogin = () => {}}) => {
  return (
    <Container className='my-5 Home__form'>
      <Form onSubmit={onStaffLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={onStaffInputChange} value={username} name='username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password:</Form.Label>
          <Form.Control type='password' placeholder='Enter password' onChange={onStaffInputChange} value={password} name='password' />
        </Form.Group>

        <Button type='submit' variant='primary'>Login</Button>
      </Form>
    </Container>
  );
};
