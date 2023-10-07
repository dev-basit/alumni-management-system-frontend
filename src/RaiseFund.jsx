import { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "bootstrap-icons/font/bootstrap-icons.css";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaAddressCard,
} from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { auth } from "./services/authService";

const RaiseFundComponent = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const showDetails = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div>
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
      <div className="nav2">
        <Navbar className="nav2 bg-light">
          <Container className="d-flex w-100 justify-content-center align-items-center">
            <Navbar.Brand className="AlumniMS">
              <strong className="fs-4">RAISE FUNDS</strong>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="raise-fund-container">
        <img src="img/funds.jpg" alt="Funds" className="funds-image" />
        <div className="paymentbox">
          <Card>
            <Card.Header>
              <h5>Select Payment Method</h5>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" onClick={() => showDetails("volunteer")}>
                Volunteer
              </Button>{" "}
              <Button variant="primary" onClick={() => showDetails("jazzCash")}>
                Jazz Cash
              </Button>{" "}
              <Button variant="primary" onClick={() => showDetails("bank")}>
                Bank Account
              </Button>{" "}
            </Card.Body>
          </Card>

          {selectedMethod && (
            <div className="details">
              <h5>Details for {selectedMethod}</h5>
              {selectedMethod === "volunteer" && <p>Admin Phone No: [0321-4872104]</p>}
              {selectedMethod === "jazzCash" && (
                <div>
                  <p>Account Holder NAME: [Momna Qadeer]</p>
                  <p>Jazz Cash Account No: [0309-2345676]</p>
                </div>
              )}
              {selectedMethod === "bank" && (
                <div>
                  <p>Bank Name: [HBL]</p>
                  <p>Account No: [3452-5678543-90]</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="footer mt-3">
        <footer className="text-light py-4">
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <h5>About Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna eget posuere
                  euismod.
                </p>
              </Col>
              <Col md={4} sm={12}>
                <h5>Contact Us</h5>
                <p>
                  <FaAddressCard /> Address: 123 Main Street, City, Country
                  <br />
                  <FaEnvelope />
                  Email: example@example.com
                  <br />
                  <FaPhone />
                  Phone: +1 234-567-8901
                </p>
              </Col>
              <Col md={4} sm={12}>
                <h5>Follow Us</h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      {/* Use the FaLinkedin icon here */}
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>{" "}
            <br /> <br />
            <Row>
              <Col className="text-center">
                <p className="mb-0">&copy; 2023 Your Company Name</p>
                <p>All Rights Reserved</p>
                <p>
                  Made with <FaHeart /> by RahmeenFatima & MomnaBaig
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default RaiseFundComponent;
