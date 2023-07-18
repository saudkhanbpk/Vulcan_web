import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import OurMission from "../Pages/OurMission/ourMission";
import BecomeEducator from "../Pages/BecomeEducator/becomeEducator";
import HowItWorks from "../Pages/HowItWorks/howItWorks";
import EducatorFaq from "../components/Faq/educatorFaq";
import LearnerFaq from "../components/Faq/learnerFaq";
import Privacy from "../Pages/Privacy/privacy";
import Policies from "../Pages/Policies/policies";
import Contact from "../Pages/Contact/contact";
import EducatorAccountMainPage from "../components/Auth/EducatorAccountMainPage/educatorAccountMainPage";
import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer/footer";
import { FeatureFlags } from "../contexts/FeatureFlags";
import { Courses } from "../components/CoursesScreen/courses";
import CoursesSoon from "../Pages/CoursesPage/coursesSoon";
import HomeScreen from "../Pages/Home/home";
import { Dashboard } from "../Pages/Dashboard/dashboard.jsx";
import { Profile } from "../Pages/Profile/profile";
// import useAuthentication from "../components/Header/onAuthStateChange";
import { PrivateOutlet } from "./PrivateRoute";

const Router = () => {
  const location = useLocation();
  const { features } = React.useContext(FeatureFlags);

  return (
    <div>
      {location.pathname !== "/educator-account" ? <Navbar /> : ""}

      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/about" element={<OurMission />} />
        {features.showCourses ? (
          <Route exact path="/courses" element={<CoursesSoon />} />
        ) : (
          <Route exact path="/courses" element={<Courses />} />
        )}
        <Route
          exact
          path="/become-educator"
          element={<BecomeEducator />}
        ></Route>
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/educator-faq" element={<EducatorFaq />} />
        <Route exact path="/learner-faq" element={<LearnerFaq />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/policies" element={<Policies />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contact" element={<Profile />} />
        <Route
          exact
          path="/educator-account"
          element={<EducatorAccountMainPage />}
        />
        <Route element={<PrivateOutlet />}>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        

      </Routes>
      {location.pathname !== "/educator-account" ? <Footer /> : ""}
    </div>
  );
};

export default Router;
