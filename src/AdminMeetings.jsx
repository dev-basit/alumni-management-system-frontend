import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MeetingApp = () => {
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState({ title: "", date: "", description: "" });
  const [editingIndex, setEditingIndex] = useState(-1); // -1 means no meeting is currently being edited

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeeting({ ...meeting, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex === -1) {
      // Add a new meeting
      setMeetings([...meetings, meeting]);
    } else {
      // Update an existing meeting
      meetings[editingIndex] = meeting;
      setMeetings([...meetings]);
      setEditingIndex(-1); // Reset the editing index
    }

    // Clear the form
    setMeeting({ title: "", date: "", description: "" });
  };

  const handleEdit = (index) => {
    // Load the meeting details into the form for editing
    setMeeting(meetings[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // Remove the meeting from the list
    const updatedMeetings = [...meetings];
    updatedMeetings.splice(index, 1);
    setMeetings(updatedMeetings);
  };

  return (
    <div className="meeting">
      <Navbar collapseOnSelect expand="lg" id="navbar" className="fixed-top ">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /> <br />
      <Container>
        <div>
          <h2 className="h1 text-white text-center mt-5">Meeting Schedules</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label className="text-white fs-5 mb-1">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={meeting.title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label className="text-white fs-5 mb-1">Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={meeting.date}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label className="text-white fs-5 mb-1">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={meeting.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button className="mt-4 mb-3 text-white" variant="primary" type="submit">
            {editingIndex === -1 ? "Add Meeting" : "Update Meeting"}
          </Button>
        </Form>

        <h2 className="text-white h1">Meetings</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>
                  <Button className="mx-2 me-2" variant="info" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button className="mx-2 me-2" variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MeetingApp;
