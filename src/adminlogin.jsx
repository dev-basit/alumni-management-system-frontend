import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import "./index.css";
// import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { auth } from "./services/authService";
import { showFailureToaster } from "./utils/toaster";
import { setLocalStorageItem } from "./utils/localStorage";
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

function AdminLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = auth.getCurrentUserDetails();

    if (userDetails) {
      if (userDetails.isAdmin) navigate("/admindashboard");
      else navigate("/HomePage");
    }
  }, []);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("adminloginhandleSubmit");

    const { error } = auth.userLoginSchema.validate(user);
    if (error) return showFailureToaster(error.message);

    try {
      const isLogin = await auth.login({ ...user });
      // if (isLogin) navigate("/HomePage");

      const userDetails = await auth.getCurrentUserDetails();
      console.log("userDetails", userDetails);
      setLocalStorageItem("userType", userDetails.isAdmin);

      if (userDetails.isAdmin) navigate("/admindashboard");
      else navigate("/HomePage");

      // setUser({ name: "", email: "", password: "", userType: "" });
    } catch (error) {
      //
    }
  };

  return (
    <div className="AdminloginPage d-flex justify-content-center align-items-center vh-100 ">
      <div className="ad-login text-white p-3 rounded w-25">
        <h2
          style={{ fontFamily: "Courgette, cursive" }}
          className="h1 d-flex align-items-center justify-content-center mt-4 mb-4"
        >
          ADMIN LOGIN
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              type="email"
              className="form-control border-rounded"
              placeholder="Enter Email"
              onChange={handleChange}
              autoComplete="email"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control border-rounded"
              placeholder="Enter Password"
              onChange={handleChange}
              autoComplete="password"
              required
            ></input>
          </div>
          <Button
            href="./admindashboard"
            type="submit"
            style={{
              background: "linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)",
            }}
            className="ad-login-btn btn btn-light border-rounded text-white w-100 mt-3"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <br /> <br />
          <input type="checkbox" className="custom-control custom-checkbox" id="check" />
          <label htmlFor="check" className="custom-input-label mx-1">
            You are agree to our terms and policies
          </label>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
