// // src/components/AdminDashboard.js

import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./style.css";
import { FiLogOut, FiUser } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome, FaList, FaVideo, FaUser, FaCalendar, FaComment } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { auth } from "./services/authService";

function AdminDashboard() {
  return (
    <div className="a-db">
      <div className="header d-flex justify-content-around">
        <div>
          <img
            className="img1 mt-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLJEoWjHPl2qAJ8Vy9wN-LeSKFvZpCZU0gszYGL8&s"
            alt=""
          />
        </div>
        <div className=" dbname d-flex align-items-center">
          <h1> Admin DashBoard </h1>
        </div>
        <div>
          <img
            className="img2 mt-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLJEoWjHPl2qAJ8Vy9wN-LeSKFvZpCZU0gszYGL8&s"
            alt=""
          />
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" id="navbar" className="sticky ">
        <Container>
          <Navbar.Brand href="#home" className="navname text-white h1 p-3 m-0">
            <strong>
              <em>AlumifyConnect</em>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#aboutid" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="./Gallery" className="text-white">
                Gallery
              </Nav.Link>
              <Nav.Link href="./ContactUs" className="text-white">
                Contact Us
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./events"> Past Events</NavDropdown.Item>
                <NavDropdown.Item href="./Jobhiring">Jobs hirings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./feedback">Feedback</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex a-side ">
        <div className="d-flex sidebar flex-column flex-shrink-3 text-white">
          <ul className="nav nav-pills flex-column px-0"></ul>
          <li className="side-nav-item text-dark">
            <a href="./HomePage" className="navlink text-white p-1 mt-3">
              <FaHome /> <span className="mx-2"> Home</span>
            </a>
          </li>{" "}
          <br />
          <li className="side-nav-item text-dark">
            <a href="./manageuser" className="navlink text-white p-1 ">
              <FiUser /> <span className="mx-2">Manage User Accounts </span>
            </a>
          </li>{" "}
          <br />
          <li className="side-nav-item text-dark">
            <a href="./AdminMeetings" className="navlink text-white p-1 ">
              <FaVideo /> <span className="mx-2"> Meetings </span>
            </a>
          </li>
          <br />
          <div onClick={() => auth.logout()} style={{ cursor: "pointer" }}>
            <li className="side-nav-item text-dark">
              <a className="navlink text-white p-1 ">
                <FiLogOut /> <span className="mx-2"> Logout </span>
              </a>
            </li>
          </div>
        </div>
        <div className="content container mx-5 mt-5 mb-2">
          <div className=" ad-cards row w-100 ">
            <div className="col-md-3 col text-white bg-success d-flex justify-content-around px-3 py-3 rounded mb-1">
              <h2 className="mt-3">
                Alumnis{" "}
                <span className="mt-3 mx-5">
                  <FaUser />
                </span>
              </h2>
            </div>
            <div className="col-md-3 col text-white bg-warning d-flex justify-content-around px-3 py-3 rounded mx-4 mb-1">
              <h2 className="mt-3 mx-1">
                Events{" "}
                <span className="mt-3 mx-5">
                  <FaCalendar />
                </span>
              </h2>
            </div>
            <div className="col-md-3 col text-white bg-danger d-flex justify-content-around px-3 py-3 rounded">
              <a href="./view-feedback" className="h2 mt-3 h">
                <h2 className="mt-3 ">
                  Feedback
                  <span className="mt-3 mx-5">
                    <FaComment />
                  </span>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

// import React, { Component } from 'react'

// export class admindashboard extends Component {
//   render() {
//     return (
//       <div>admindashboard</div>
//     )
//   }
// }

// export default admindashboard
