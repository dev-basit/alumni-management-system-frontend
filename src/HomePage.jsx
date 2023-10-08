import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Carousel } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Responsive from "./homeslider";
import AllCollapseExample from "./FAQS";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaHeart,
  FaAddressCard,
} from "react-icons/fa";
import { auth } from "./services/authService";
<style>@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');</style>;

function HomePage() {
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
              <Nav.Link href="./meetings" className="text-white">
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
      <br /> <br />
      <div id="carousel" className=" position-relative w-100 mt-1">
        <Carousel>
          <Carousel.Item>
            <div>
              <img className="img-fluid  " src="img\carousel3.jpg" alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img className="img-fluid" src="img\carousel2.jpg" alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img className="img-fluid" src="img\carousel1.jpg" alt="" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* NeXt about us content of homepage */}
      <div id="aboutid" className="aboutname justify-content-center align-items-center d-flex mt-5">
        <h2>What we DO?</h2>
      </div>
      <div className="justify-content-center align-items-center me-5 mx-5 d-block">
        <q>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, reprehenderit inventore
          tenetur dolorum fuga laboriosam, harum assumenda dolore labore nisi in, error cumque quidem
          expedita quae libero sed veritatis iste asperiores nemo. Velit autem nisi deleniti molestiae
          illo eius labore? Tempore nam reprehenderit rerum eum dignissimos consequuntur fugit blanditiis
          ipsam quae debitis optio, consequatur doloremque accusamus voluptatibus? Eaque similique
          voluptas vitae asperiores facere iure aut provident, doloribus accusamus dolores. Nulla quam
          doloremque laudantium voluptas. Recusandae expedita accusamus aspernatur pariatur repudiandae
          quam molestias aut, molestiae eligendi? Consectetur officia voluptatibus iste explicabo
          adipisci quam voluptas assumenda, delectus, pariatur magni modi nesciunt laborum.
        </q>
      </div>
      <br /> <br /> <br />
      <div className="section bg-light ">
        <Row className="about justify-content-center align-items-center mt-4 p-4">
          <Col sm={4} className="me-4">
            <h3 className="mt-2">Volunteering</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit quas corrupti
              neque obcaecati nostrum explicabo consequatur eveniet consectetur? Itaque accusamus nulla
              voluptas inventore voluptatum temporibus incidunt eligendi iure vitae quis aspernatur
              maxime quo quam eum nemo, est sapiente debitis similique eius! Cumque neque nemo odio
              dolor, assumenda doloribus quisquam animi veritatis reiciendis consequatur maxime ipsum
              enim vero debitis, laboriosam, hic unde. Ipsum, sapiente quasi! Facilis totam culpa
              voluptas, debitis, temporibus neque nihil autem natus tempora tempore rem deserunt cum
              porro a sunt harum ducimus cumque laborum sequi rerum minus at! Eaque atque fuga sequi
              voluptas, dignissimos!
            </p>
          </Col>
          <Col sm={4}>
            <img className="img-fluid mt-3 mb-3" src="img\Volunteer.png" alt="" />
          </Col>
        </Row>
      </div>
      <div className="section">
        <Row className="about justify-content-center align-items-center mt-4 p-4">
          <Col sm={4} className="me-4">
            <img className="img-fluid mt-3 mb-3" src="img\mentoring.jpg" alt="" />
          </Col>
          <Col sm={4}>
            <h3>Mentoring</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit quas corrupti
              neque obcaecati nostrum explicabo consequatur eveniet consectetur? Itaque accusamus nulla
              voluptas inventore voluptatum temporibus incidunt eligendi iure vitae quis aspernatur
              maxime quo quam eum nemo, est sapiente debitis similique eius! Cumque neque nemo odio
              dolor, assumenda doloribus quisquam animi veritatis reiciendis consequatur maxime ipsum
              enim vero debitis, laboriosam, hic unde. Ipsum, sapiente quasi! Facilis totam culpa
              voluptas, debitis, temporibus neque nihil autem natus tempora tempore rem deserunt cum
              porro a sunt harum ducimus cumque laborum sequi rerum minus at! Eaque atque fuga sequi
              voluptas, dignissimos!
            </p>
          </Col>
        </Row>
      </div>
      <div className="section bg-light ">
        <Row className="about justify-content-center align-items-center mt-4 p-4">
          <Col sm={4} className="me-4">
            <h3 className="mt-2">Events</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit quas corrupti
              neque obcaecati nostrum explicabo consequatur eveniet consectetur? Itaque accusamus nulla
              voluptas inventore voluptatum temporibus incidunt eligendi iure vitae quis aspernatur
              maxime quo quam eum nemo, est sapiente debitis similique eius! Cumque neque nemo odio
              dolor, assumenda doloribus quisquam animi veritatis reiciendis consequatur maxime ipsum
              enim vero debitis, laboriosam, hic unde. Ipsum, sapiente quasi! Facilis totam culpa
              voluptas, debitis, temporibus neque nihil autem natus tempora tempore rem deserunt cum
              porro a sunt harum ducimus cumque laborum sequi rerum minus at! Eaque atque fuga sequi
              voluptas, dignissimos!
            </p>
          </Col>
          <Col sm={4}>
            <img className="img-fluid mt-3 mb-3" src="img\homeEvent.jpg" alt="" />
          </Col>
        </Row>
      </div>
      <div className="section">
        <Row className="about justify-content-center align-items-center mt-4 p-4">
          <Col sm={4} className="me-4">
            <img className="img-fluid mt-3 mb-3" src="img\alumReward.png" alt="" />
          </Col>
          <Col sm={4}>
            <h3>Alumni Rewards</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit quas corrupti
              neque obcaecati nostrum explicabo consequatur eveniet consectetur? Itaque accusamus nulla
              voluptas inventore voluptatum temporibus incidunt eligendi iure vitae quis aspernatur
              maxime quo quam eum nemo, est sapiente debitis similique eius! Cumque neque nemo odio
              dolor, assumenda doloribus quisquam animi veritatis reiciendis consequatur maxime ipsum
              enim vero debitis, laboriosam, hic unde. Ipsum, sapiente quasi! Facilis totam culpa
              voluptas, debitis, temporibus neque nihil autem natus tempora tempore rem deserunt cum
              porro a sunt harum ducimus cumque laborum sequi rerum minus at! Eaque atque fuga sequi
              voluptas, dignissimos!
            </p>
          </Col>
        </Row>
      </div>
      <div className="section bg-light ">
        <Row className="about justify-content-center align-items-center mt-4 p-4">
          <Col sm={4} className="me-4">
            <h3 className="mt-2">Job Opportunities</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit quas corrupti
              neque obcaecati nostrum explicabo consequatur eveniet consectetur? Itaque accusamus nulla
              voluptas inventore voluptatum temporibus incidunt eligendi iure vitae quis aspernatur
              maxime quo quam eum nemo, est sapiente debitis similique eius! Cumque neque nemo odio
              dolor, assumenda doloribus quisquam animi veritatis reiciendis consequatur maxime ipsum
              enim vero debitis, laboriosam, hic unde. Ipsum, sapiente quasi! Facilis totam culpa
              voluptas, debitis, temporibus neque nihil autem natus tempora tempore rem deserunt cum
              porro a sunt harum ducimus cumque laborum sequi rerum minus at! Eaque atque fuga sequi
              voluptas, dignissimos!
            </p>
          </Col>
          <Col sm={4}>
            <img className="img-fluid mt-3 mb-3" src="img\JobOpportunity.jpg" alt="" />
          </Col>
        </Row>
      </div>
      {/* slider cards */}
      <br /> <br /> <br />
      <div id="s-head" className="justify-content-center align-items-center d-flex mt-5">
        <h2>Trusted BY Communities Like...</h2>
      </div>
      <br /> <br />
      <div>
        <Responsive />
      </div>{" "}
      <br /> <br /> <br />
      {/* accordion of frequently asked questions */}
      <div>
        <AllCollapseExample />
      </div>
      {/* feedback module div */}
      {/* <div>
</div> */}
      {/* Footer */}
      <br /> <br /> <br /> <br />
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
}

export default HomePage;
