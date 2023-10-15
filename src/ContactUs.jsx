import { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
import emailjs from "@emailjs/browser";

function Contactus() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_f53afv6", "template_yluq3gc", form.current, "cD-MQ4A7msGnFvZgY").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div>
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
      <div className="cnt justify-content-center align-items-center vh-100">
        <div className="c-nav">
          <br /> <br />
          <h2 className="c-name text-center text-white mt-5">Contact Us</h2>
          <h4 className="c-name m-2 text-white text-center">Feel free to ask anything!</h4>
        </div>
        <form className="section mt-5" ref={form} onSubmit={handleSubmit}>
          <Row className="justify-content-center align-items-center d-flex">
            <Col md={12} lg={6}>
              <div className="c-form p-4">
                <div className="contactname form-group text-white">
                  <label htmlFor="name">
                    <strong>Full Name</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    className="con-width form-control rounded"
                    autoComplete="off"
                  />
                </div>
                <br />

                <div className="contactmail form-group text-white">
                  <label htmlFor="email">
                    <strong>Your Email ID</strong>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email ID"
                    name="email"
                    className="form-control rounded"
                    autoComplete="off"
                  />
                </div>
                <br />

                <div className="contactmsg form-group text-white">
                  <label htmlFor="message">
                    <strong>Your Message</strong>
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows="6"
                    placeholder="Write Message Here..."
                    required
                    className="form-control rounded"
                  ></textarea>
                </div>
                <br />

                <div className="contactlinkid form-group text-white">
                  <label htmlFor="LinkdInProfile">
                    <strong>Your LinkedIn Profile</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your LinkedIn ID"
                    name="LinkdInProfile"
                    className="form-control rounded"
                  />
                </div>

                <div className="sendmsg form-group text-center mt-3">
                  <Button
                    style={{
                      background:
                        "linear-gradient(to right, rgba(2, 56, 110, 0.7), rgba(0, 82, 162, 0.7)",
                      fontSize: "1.3rem",
                    }}
                    type="submit"
                    className="btn  btn-light border-rounded text-white w-100 mt-3"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <div className="c-icons  p-1">
                <div className="insta">
                  <a href="/" className="d-flex align-items-center justify-content-center">
                    <span className=" text-white fs-4">
                      <FaInstagram />
                    </span>
                    <span className="fs-4 d-sm-inline text-white mx-1">Instagram</span>
                  </a>
                  <p className="text-light mx-4 d-flex align-items-center justify-content-center">
                    @rahmeen_fatima21
                  </p>
                  <p className="text-light mx-4 d-flex align-items-center justify-content-center">
                    @momna.baig.12
                  </p>
                </div>
                <br />
                <div className="fb">
                  <a
                    href="/"
                    className="d-flex text-white d-flex align-items-center justify-content-center"
                  >
                    <span className=" text-white fs-4">
                      <FaFacebook />
                    </span>
                    <span className="fs-4 d-sm-inline text-white mx-1">Facebook</span>
                  </a>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    Rahmeen Fatima
                  </p>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    Momna Baig
                  </p>
                </div>
                <br />
                <div className="c-email">
                  <a
                    href="/"
                    className="d-flex text-white d-flex align-items-center justify-content-center"
                  >
                    <span className=" text-white fs-4">
                      <FaEnvelope />
                    </span>
                    <span className="fs-4 d-sm-inline text-white mx-1">Email</span>
                  </a>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    rahmeenfatima22@gmail.com
                  </p>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    mq.momnaqadeer@gmail.com
                  </p>
                </div>
                <br />
                <div className="call">
                  <a
                    href="/"
                    className="d-flex text-white d-flex align-items-center justify-content-center"
                  >
                    <span className=" text-white fs-4">
                      <FaPhone />
                    </span>
                    <span className="fs-4 d-sm-inline text-white mx-1">Call</span>
                  </a>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    +92 0900-78601
                  </p>
                  <p className="text-white mx-4 d-flex align-items-center justify-content-center">
                    +92 0800-76801
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </form>{" "}
        <br /> <br /> <br />
        <div className="footer mt-3">
          <footer className="text-light py-4">
            <Container>
              <Row>
                <Col md={4} sm={12}>
                  <h5>About Us</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula urna eget
                    posuere euismod.
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
    </div>
  );
}

export default Contactus;
