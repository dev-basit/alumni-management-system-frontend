import { useState } from "react";
import "./style.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaTwitter, FaLinkedin,FaHeart, FaAddressCard} from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Modal, Form, Container, Card } from "react-bootstrap";
import { auth } from "./services/authService";

const JobHiringComponent = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Associate Software Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Software Quality Assurance",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "IT Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "DevOps Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Frontend Developer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Web Development Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Backend Developer ",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "React Js intern",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "MERN stack intern",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Python Developer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: ".Net Developer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "SQL Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Database Internship",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Java Developer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Html, Css, Javascript internship",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Software Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Networking Job",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "ML & AI internship",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Cloud Computing Engineer",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },
    {
      title: "Computer Scientist",
      location: "GoSaas Labs",
      requirements: "IT degree , Send Resume at: careers@gosaaslab.com",
    },

    // Add more jobs as needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({ title: "", location: "", requirements: "" });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handlePostJob = () => {
    setJobs([...jobs, newJob]);
    setNewJob({ title: "", location: "", requirements: "" });
    handleClose();
  };

  return (
    <div className="JobHire ">
      <Navbar className="nav1 sticky-top bg-light">
        <Container className="d-flex w-100 justify-content-center align-items-center">
          <Navbar.Brand className="AlumniMS">
            <img
              src="img/nav-logo.jpg"
              width={30}
              height={30}
              alt=""
              className="img-fluid rounded me-3 d-inline-block"
            />
            <strong className="fs-4">Alumni Management System</strong>
            <img
              src="img/nav-logo.jpg"
              width={30}
              height={30}
              alt=""
              className="img-fluid rounded mx-3 d-inline-block"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        id="navbar"
        className="fixed-top "
        style={{ marginTop: "56px" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="navname text-white h1 p-3 m-0">
            <strong>
              <em>AlumifyConnect</em>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#Home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutid" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="./AdminMeetings" className="text-white">
                Meetings
              </Nav.Link>
              <Nav.Link href="./Announcements" className="text-white">
                Announcements
              </Nav.Link>
              {/* <Nav.Link href="./Gallery" className='text-white'>Gallery</Nav.Link> */}
              <Nav.Link href="./RaiseFund" className="text-white">
                RaiseFunds
              </Nav.Link>
              <Nav.Link href="./ContactUs" className="text-white">
                Contact Us
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./events">Events</NavDropdown.Item>
                <NavDropdown.Item href="./Jobhiring">Job hirings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./feedback">Feedback</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button
                className=" btn btn-light border-rounded bg-white text-dark"
                onClick={() => auth.logout()}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Job">
        <Container className="jobcontainer">
          <h2>Job Hiring</h2>

          <Button variant="primary" onClick={handleShow} className="post-job-button">
            Post a Job
          </Button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Post a Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="title">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter job title"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="requirements">
                  <Form.Label>Requirements</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter job requirements"
                    name="requirements"
                    value={newJob.requirements}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePostJob}>
                Post Job
              </Button>
            </Modal.Footer>
          </Modal>

          <Card>
            <Card.Body>
              <ul className="job-list">
                {jobs.map((job, index) => (
                  <li key={index}>
                    <strong>{job.title}</strong> - {job.location}
                    <br />
                    Requirements: {job.requirements}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default JobHiringComponent;
