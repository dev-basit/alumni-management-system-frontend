import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaHeart,
  FaAddressCard,
} from 'react-icons/fa';

function EventGallery() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedImage, setEditedImage] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('gallery_images')) || [];
    setImages(savedImages);
  }, []);

  useEffect(() => {
    localStorage.setItem('gallery_images', JSON.stringify(images));
  }, [images]);

  const handleAddImage = () => {
    setNewImage('');
    setEditIndex(null);
    setShowModal(true);
  };

  const handleSaveImage = () => {
    if (editIndex !== null) {
      const updatedImages = [...images];
      updatedImages[editIndex] = editedImage;
      setImages(updatedImages);
    } else {
      setImages([...images, newImage]);
    }

    setShowModal(false);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleEditImage = (index) => {
    setEditedImage(images[index]);
    setEditIndex(index);
    setShowModal(true);
  };


  // Style for Card.Img elements
  const cardImgStyle = {
    height: '270px', // Set the desired height
    width: '100%',   // Set the desired width
    objectFit: 'cover', // Maintain aspect ratio and cover container
  };

  return (
    <div className="eventgallery" >
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" id="navbar" className="stickey">
        <Container>
          <Navbar.Brand href="#home" className="navname text-white h2 p-3 m-0">
            AlumifyConnect
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./HomePage" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutid" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#meetings" className="text-white">
                Meetings
              </Nav.Link>
              <Nav.Link href="#Annoucements" className="text-white">
                Announcements
              </Nav.Link>
              <Nav.Link href="./RaiseFund" className="text-white">
                RaiseFunds
              </Nav.Link>
              <Nav.Link href="./ContactUs" className="text-white">
                Contact Us
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Jobs hirings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Forum</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cards */}
      <Container className="mt-4">
      <Row className='mt-4'>
      <Col lg={4} md={12} className='mb-4 mb-lg-0'>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event1.jpg" />
        <Card.Body>
          <Card.Title>"Tiger of maisoor" -The play</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event2.jpg" />
        <Card.Body>
          <Card.Title>"Annual Sports Gala 2021"</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event3.jpg" />
        <Card.Body>
          <Card.Title>"The Last Follower and The return of voldemort" -fanmade movie</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event4.jpg" />
        <Card.Body>
          <Card.Title>"HarryPotter Festival"</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event5.jpg" />
        <Card.Body>
          <Card.Title>"The Last follower" -screening once again in 2022</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event8.jpg" />
        <Card.Body>
          <Card.Title>"CyberSecurity Awareness Seminar" -CSS Society DCS</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, distinctio similique voluptate provident voluptas aliquid tempora consectetur ducimus veritatis unde ipsa praesentium nisi quos rem a vel voluptatibus sunt dolor quasi consequuntur. Minima libero quas praesentium blanditiis! Qui possimus magnam laudantium quis. Magnam, harum.
          </Card.Text>
        </Card.Body>
      </Card>

    
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0'>
      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event6.jpg" />
        <Card.Body>
          <Card.Title>"Annual Achievements Awards"</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis fuga accusantium. Et enim praesentium voluptatum quo, quas blanditiis tenetur. Cupiditate dolores magni impedit reprehenderit iure quam, molestias adipisci deleniti amet facilis placeat sequi sit commodi, similique natus laudantium. Voluptate expedita possimus earum est architecto?
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-3'>
        <Card.Img variant="top" src="img\event7.jpg" />
        <Card.Body>
          <Card.Title>"The Tech Talk" -DCS Seminar</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis fuga accusantium. Et enim praesentium voluptatum quo, quas blanditiis tenetur. Cupiditate dolores magni impedit reprehenderit iure quam, molestias adipisci deleniti amet facilis placeat sequi sit commodi, similique natus laudantium. Voluptate expedita possimus earum est architecto?
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row> <br /> <br /> <br />
      </Container>

      {/* Add Image Button */}
      <div className="dynamic text-center">
        <Button style={{ background: 'linear-gradient(to right, rgba(2, 56, 110, 0.6), rgba(0, 81, 162, 0.6)', fontSize: '1.1rem', border: '2px solid white'}}
          onClick={handleAddImage}
          className="mb-1 mt-1 p-3 rounded bg-primary w-50"
        >
          Add Image
        </Button>
      </div>

      {/* Display Images */}
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={image} style={cardImgStyle} />
                <Card.Body>
                  <Button
                    variant="info"
                    onClick={() => handleEditImage(index)}
                    className="mr-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteImage(index)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for adding/editing images */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Image' : 'Add Image'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={editIndex !== null ? editedImage : newImage}
                onChange={(e) =>
                  editIndex !== null
                    ? setEditedImage(e.target.value)
                    : setNewImage(e.target.value)
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveImage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
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
                  <FaEnvelope /> Email: example@example.com
                  <br />
                  <FaPhone /> Phone: +1 234-567-8901
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
            </Row>
            <br /> <br />
            <Row>
              <Col className="text-center">
                <p className="mb-0">&copy; 2023 Your Company Name</p>
                <p>All Rights Reserved</p>
                <p>
                  Made with <FaHeart /> by Rahmeen Fatima & Momna Baig
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default EventGallery;
