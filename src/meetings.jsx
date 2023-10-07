import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const MeetingList = ({ meetings }) => {
  return (
    <div>
       <Navbar className="nav1 sticky-top bg-light">
    <Container className='d-flex w-100 justify-content-center align-items-center'>
      <Navbar.Brand className='AlumniMS'>
        <img src="img/nav-logo.jpg" width={30} height={30} alt="" className="img-fluid rounded me-3 d-inline-block" />
        <strong className='fs-4'>Alumni Management System</strong>
        <img src="img/nav-logo.jpg" width={30} height={30} alt="" className="img-fluid rounded mx-3 d-inline-block" />
        </Navbar.Brand>
    </Container>
  </Navbar>
    <Navbar collapseOnSelect expand="lg" id='navbar' className="fixed-top " style={{ marginTop: '56px' }}>
      <Container>
        <Navbar.Brand href="#home" className='navname text-white h1 p-3 m-0'><strong><em>AlumifyConnect</em></strong></Navbar.Brand>
        <Navbar.Toggle className='bg-white'  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#Home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#aboutid" className='text-white'>About Us</Nav.Link>
            <Nav.Link href="./AdminMeetings" className='text-white'>Meetings</Nav.Link>
            <Nav.Link href="./Announcements" className='text-white'>Announcements</Nav.Link>
            {/* <Nav.Link href="./Gallery" className='text-white'>Gallery</Nav.Link> */}
            <Nav.Link href="./RaiseFund" className='text-white'>RaiseFunds</Nav.Link>
            <Nav.Link href="./ContactUs" className='text-white'>Contact Us</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown" >
            <NavDropdown.Item href="./events">Events</NavDropdown.Item>
              <NavDropdown.Item href="./Jobhiring">Job hirings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./feedback">Feedback</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Button href="./logout" type='submit' className=' btn btn-light border-rounded bg-white text-dark'>
                Logout </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default MeetingList;
