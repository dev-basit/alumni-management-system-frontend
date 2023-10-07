import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import HomePage from "./HomePage";
import Contactus from "./ContactUs";
import UserLogin from "./userlogin";
import SignUp from "./signup";
import AdminLogin from "./adminlogin";
import AdminDashboard from "./admindashboard";
import Meetings from "./meetings";
import EventGallery from "./events";
import RoleLogin from "./rolebaselogin";
import RaiseFundComponent from "./RaiseFund";
import JobHiringComponent from "./Jobhiring";
import Systemlogout from "./logout";
import FeedbackForm from "./feedback";
import MeetingApp from "./AdminMeetings";
import ManageUser from "./manageuser";
import AnnouncementComponent from "./Announcements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<RoleLogin />}></Route>}
        {<Route path="/adminlogin" element={<AdminLogin />}></Route>}
        {<Route path="/signup" element={<SignUp />}></Route>}
        {<Route path="/userlogin" element={<UserLogin />}></Route>}
        {<Route path="/HomePage" element={<HomePage />}></Route>}
        {<Route path="/ContactUs" element={<Contactus />}></Route>}
        {<Route path="/Announcements" element={<AnnouncementComponent />}></Route>}
        {<Route path="/RaiseFund" element={<RaiseFundComponent />}></Route>}
        {<Route path="/admindashboard" element={<AdminDashboard />}></Route>}
        {<Route path="/manageuser" element={<ManageUser />}></Route>}
        {<Route path="/events" element={<EventGallery />}></Route>}
        {<Route path="/AdminMeetings" element={<MeetingApp />}></Route>}
        {<Route path="/meetings" element={<Meetings />}></Route>}
        {<Route path="/Jobhiring" element={<JobHiringComponent />}></Route>}
        {<Route path="/logout" element={<Systemlogout />}></Route>}
        {<Route path="/feedback" element={<FeedbackForm />}></Route>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
