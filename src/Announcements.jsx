import "./style.css";
import { Row, Col } from "react-bootstrap";
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
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Card } from "react-bootstrap";

const AnnouncementComponent = () => {
  const announcements = [
    {
      title: "Announcement 1: CAREER FAIR",
      content:
        "All Software houses are Coming in Government College University Lahore with multiple opportunities. Date & Time: 30 October,2023  10:00AM",
    },
    {
      title: "Announcement 2: ARBISOFT RECRUITMENT DRIVE",
      content:
        "Arbisoft is coming in Government College University Lahore. Date & Time: 23 October,2023  10:00AM",
    },
    {
      title: "Announcement 3: DEVSINC RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 1 October,2023  10:00AM",
    },
    {
      title: "Announcement 4: GOSAAS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 4 October,2023  10:00AM",
    },
    {
      title: "Announcement 5: SIXLOGICS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 2 October,2023  10:00AM.",
    },
    {
      title: "Announcement 6: KODSINC RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 3 October,2023  10:00AM.",
    },
    {
      title: "Announcement 7: THE-IN-SHORT RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 7 October,2023  10:00AM.",
    },
    {
      title: "Announcement 8: PURELOGICS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 5 October,2023  10:00AM",
    },
    {
      title: "Announcement 9: AMCOIT-SYSTEMS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 10 October,2023  10:00AM.",
    },
    {
      title: "Announcement 10: VENTECH RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 12 October,2023  10:00AM.",
    },
    {
      title: "Announcement 11: AS-TECHWARE RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 11 October,2023  10:00AM",
    },
    {
      title: "Announcement 12: BSS UNIVERSAL RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 15 October,2023  10:00AM",
    },
    {
      title: "Announcement 13: NOVATORESOLS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 14 October,2023  10:00AM",
    },
    {
      title: "Announcement 14: GIANT-EYES RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 20 October,2023  10:00AM.",
    },
    {
      title: "Announcement 15: LOGICON RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 22 October,2023  10:00AM.",
    },
    {
      title: "Announcement 16: OPTIMA-GEEKS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 19 October,2023  10:00AM.",
    },
    {
      title: "Announcement 17: VIRTUENETZ RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 21 October,2023  10:00AM.",
    },
    {
      title: "Announcement 18: GOSAAS-LABS RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 18 October,2023  10:00AM.",
    },
    {
      title: "Announcement 19:KRYPTO-MIND RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 25 October,2023  10:00AM.",
    },
    {
      title: "Announcement 20: CYBER-NEST RECRUITMENT DRIVE",
      content:
        "This Software house is Coming in Government College University Lahore with multiple opportunities. Date & Time: 27 October,2023  10:00AM.",
    },
    // Add more announcements as needed
  ];
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
      <Navbar collapseOnSelect expand="lg" id="navbar" className=" stickey">
        <Container>
          <Navbar.Brand href="#home" className="navname text-white h2 p-3 m-0">
            AlumifyConnect
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="./HomePage" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutid" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="./meetings" className="text-white">
                Meetings
              </Nav.Link>
              <Nav.Link href="./Gallery" className="text-white">
                Gallery
              </Nav.Link>
              <Nav.Link href="./RaiseFund" className="text-white">
                RaiseFunds
              </Nav.Link>
              <Nav.Link href="./ContactUs" className="text-white">
                Contact Us
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./PastEvents"> Past Events</NavDropdown.Item>
                <NavDropdown.Item href="./Jobhiring">Jobs hirings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Forum</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="Announcements">
        <Container className="Announcement-container">
          <h2>Announcements</h2>

          {announcements.map((announcement, index) => (
            <Card key={index} className="ann-card mb-3">
              <Card.Body>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Text>{announcement.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>

      <div className="footer">
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

export default AnnouncementComponent;
