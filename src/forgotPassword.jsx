import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style.css";
import "./index.css";
import { auth } from "./services/authService";
import { showFailureToaster } from "./utils/toaster";
import { userService } from "./services/userService";

function ForgotPassword() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    try {
      const { error } = userService.resetPasswordSchema.validate(user);
      if (error) return showFailureToaster(error.message);

      if (user.password !== user.confirmPassword)
        return showFailureToaster("Confirm password is not same.");

      await userService.resetPassword({ ...user });
    } catch (error) {
      //
    }
  };

  return (
    <div className="u-login template d-flex justify-content-center align-items-center w-100 vh-100 text-white mt-3">
      <div className=" u-form  rounded mt-2 mb-2  mx-2 me-3 p-5">
        <form>
          <h3
            style={{ fontFamily: "Courgette, cursive" }}
            className="h1 d-flex align-items-center justify-content-center"
          >
            Sign In
          </h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
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
          <div className="mb-2">
            <label htmlFor="password">Password</label>
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
          <div className="mb-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control border-rounded"
              placeholder="Confirm Password"
              onChange={handleChange}
              autoComplete="confirmPassword"
              required
            ></input>
          </div>

          <br />
          <div className="d-grid">
            <Button
              href="./HomePage"
              type="submit"
              style={{
                background: "linear-gradient(to right, rgba(53, 90, 160, 0.7), rgba(102, 204, 204, 0.7)",
              }}
              className="ad-login-btn btn btn-light border-rounded text-white w-100 mt-3"
              onClick={handleSubmit}
            >
              Change Password
            </Button>
          </div>
          <br />
          <p>
            New Member?
            <a className="mx-3" href="/">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
