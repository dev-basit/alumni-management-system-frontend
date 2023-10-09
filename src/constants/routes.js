import MeetingApp from "../AdminMeetings";
import AnnouncementComponent from "../Announcements";
import Contactus from "../ContactUs";
import HomePage from "../HomePage";
import RaiseFundComponent from "../RaiseFund";
import AdminDashboard from "../admindashboard";
import AdminLogin from "../adminlogin";
import EventGallery from "../events";
import ManageUser from "../manageuser";
import RoleLogin from "../rolebaselogin";
import SignUp from "../signup";
import UserLogin from "../userlogin";
import Meetings from "../meetings";
import JobHiringComponent from "../Jobhiring";
import Systemlogout from "../logout";
import FeedbackForm from "../feedback";
import ViewFeedback from "../view-feedback";

export const navbarItems = [];

export const links = [
  {
    path: "/",
    component: RoleLogin,
    permissions: ["admin", "alumni"],
    others: { exact: true },
  },
  {
    path: "/adminlogin",
    component: AdminLogin,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/signup",
    component: SignUp,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/userlogin",
    component: UserLogin,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/admindashboard",
    component: AdminDashboard,
    permissions: ["admin"],
  },
  {
    path: "/manageuser",
    component: ManageUser,
    permissions: ["admin"],
  },
  {
    path: "/AdminMeetings",
    component: MeetingApp,
    permissions: ["admin"],
  },
  {
    path: "/HomePage",
    component: HomePage,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/ContactUs",
    component: Contactus,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/Announcements",
    component: AnnouncementComponent,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/RaiseFund",
    component: RaiseFundComponent,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/events",
    component: EventGallery,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/meetings",
    component: Meetings,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/Jobhiring",
    component: JobHiringComponent,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/logout",
    component: Systemlogout,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/feedback",
    component: FeedbackForm,
    permissions: ["admin", "alumni"],
  },
  {
    path: "/view-feedback",
    component: ViewFeedback,
    permissions: ["admin", "alumni"],
  },
  {
    path: "*",
    component: HomePage,
    permissions: ["employee", "company", "admin"],
  },
];
