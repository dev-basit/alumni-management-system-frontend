import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style.css";
import "./index.css";
import { auth } from "./services/authService";
import { showFailureToaster } from "./utils/toaster";
import { setLocalStorageItem } from "./utils/localStorage";

function UserLogin() {
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

    console.log("userloginhandleSubmit");

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
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label">
              Remember Me
            </label>
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
              Sign In
            </Button>
          </div>
          <br />
          <p className="text-right">
            Forgot <a href=""> Password? </a> <br />
          </p>
          <p>
            New Member?
            <a className="mx-3" href="./signup">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
