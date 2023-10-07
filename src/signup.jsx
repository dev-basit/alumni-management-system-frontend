import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "./services/authService";
import { userService } from "./services/userService";
import { showFailureToaster } from "./utils/toaster";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.getCurrentUserDetails()) navigate("/HomePage");
  }, [user]);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userrrinsidesubmit  ");

    const { error } = userService.newUserSchema.validate(user);
    if (error) return showFailureToaster(error.message);

    try {
      const isCreated = await userService.addNewUser({ ...user });
      if (isCreated) navigate("/userlogin");
    } catch (error) {
      //
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 text-white mt-3">
      <div className=" signup-form rounded mt-2 mb-2 p-5">
        <form autoComplete="on" onSubmit={handleSubmit}>
          <h3
            style={{ fontFamily: "Courgette, cursive" }}
            className="h1 d-flex align-items-center justify-content-center"
          >
            Sign Up
          </h3>
          <div className="mb-2 ">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter full name."
              className="form-control input"
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          {/* <div className="mb-2">
            <label htmlFor="LName">Last Name</label>
            <input type="text" id="" placeholder="Enter Last Name" className="form-control" />
          </div> */}
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control input"
              placeholder="Enter Email"
              onChange={handleChange}
              autoComplete="email"
              required
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password."
              className="form-control input"
              onChange={handleChange}
              autoComplete="password"
            />
          </div>

          <br />
          <div className="d-grid">
            <button
              style={{
                background: "linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)",
              }}
              className="btn btn-light border-rounded text-white w-100 mt-3"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <br />
          <p className="text-right">
            Already Registered !
            <a className="mx-3" href="./userlogin">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
