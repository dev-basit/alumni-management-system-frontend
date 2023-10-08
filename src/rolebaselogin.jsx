import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import "./style.css";
import { auth } from "./services/authService";

const RoleLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = auth.getCurrentUserDetails();

    if (userDetails) {
      if (userDetails.isAdmin) navigate("/admindashboard");
      else navigate("/HomePage");
    }
  }, []);

  return (
    <div fluid className="login-page">
      <div className="role border border-dark rounded p-4 mt-5 ">
        <h2 className="main-name d-flex justify-content-center align-items-center text-white mt-4">
          ALUMNI MANAGEMENT SYSTEM
        </h2>
        <h4 className="main-name d-flex justify-content-center align-items-center text-white ">
          <strong>
            <em> "Alumify Connect"</em>
          </strong>
        </h4>
        <Row className="role1">
          <Col md={6} className="login-option ">
            <Image
              className="img-fluid mb-3 border border-primary"
              src="/img/adminlogo.png"
              width={170}
              height={170}
              roundedCircle
            />{" "}
            <br />
            <Button
              className="text-white border border-white"
              variant="primary"
              size="lg"
              href="/adminlogin"
            >
              Admin Login
            </Button>
          </Col>
          <Col md={6} className="login-option mt-3">
            <Image
              className="img-fluid mb-3 border border-primary"
              src="/img/userlogo.png"
              width={170}
              height={190}
              roundedCircle
            />
            <br />
            <Button
              className="text-white border border-white"
              variant="primary"
              size="lg"
              href="/userlogin"
            >
              User Login
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RoleLogin;
