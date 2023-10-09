// src/FeedbackForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { auth } from "./services/authService";
import { feedbackService } from "./services/feedbackService";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await feedbackService.addFeedback(feedback);
      setFeedback("");
    } catch (error) {
      //
    }
    // You can send the feedback to your server or perform any desired action here
  };

  return (
    <div className="feedback-form">
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
                <NavDropdown.Item href="./feedback">Forum</NavDropdown.Item>
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
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="feedback">
          <Form.Label
            className="h1 d-flex justify-content-center align-items-center text-white"
            style={{ marginTop: "50px" }}
          >
            Feedback
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Enter your feedback ...."
            value={feedback}
            onChange={handleFeedbackChange}
            className=" mt-5 w-50 mx-auto text-center d-flex justify-content-center" // This makes the textarea width 100% of its container
            // style={{ resize: 'none' }}
          />
        </Form.Group>
        <Button
          className="feed-btn mx-auto text-center d-flex justify-content-center mt-4"
          variant="success"
          type="submit"
        >
          Submit Feedback
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import { Container, Form, Button, ListGroup } from 'react-bootstrap';

// // Mock back-end data (replace with an actual back-end later)
// const feedbackData = [
//     {
//         id: 1,
//         feedback: "This is great!",
//     },
//     {
//         id: 2,
//         feedback: "I love this website!",
//     },
// ];

// const FeedbackForm = () => {
//     const [feedback, setFeedback] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newFeedback = {
//             id: feedbackData.length + 1,
//             feedback: feedback,
//         };
//         feedbackData.push(newFeedback);
//         setFeedback('');
//     };

//     return (
//         <Container>
//             <h2>Submit Feedback</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="feedbackForm">
//                     <Form.Label>Your Feedback:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter your feedback here"
//                         value={feedback}
//                         onChange={(e) => setFeedback(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// };

// const FeedbackList = () => {
//     return (
//         <Container>
//             <h2>Feedback List</h2>
//             <ListGroup>
//                 {feedbackData.map((item) => (
//                     <ListGroup.Item key={item.id}>{item.feedback}</ListGroup.Item>
//                 ))}
//             </ListGroup>
//         </Container>
//     );
// };

// const FeedbackModule = () => {
//     return (
//         <Router>
//             <Container>
//                 <h1>Feedback Module</h1>
//                 <ul>
//                     <li>
//                         <Link to="/feedback">Submit Feedback</Link>
//                     </li>
//                     <li>
//                         <Link to="/feedback-list">Feedback List</Link>
//                     </li>
//                 </ul>

//                 <Switch>
//                     <Route path="/feedback" component={FeedbackForm} />
//                     <Route path="/feedback-list" component={FeedbackList} />
//                 </Switch>
//             </Container>
//         </Router>
//     );
// };

// export default FeedbackModule;
