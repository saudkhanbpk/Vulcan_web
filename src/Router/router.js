import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import OurMission from "../components/OurMission/ourMission";
import HomeScreen from "../components/Home/HomeScreen/homeScreen";
import BecomeEducator from "../components/BecomeEducator/becomeEducator";
import HowItWorks from "../components/HowItWorks/howItWorks";
import EducatorFaq from "../components/HowItWorks/Faq/educatorFaq";
import LearnerFaq from "../components/HowItWorks/Faq/learnerFaq";
import CoursesScreen from "../components/CoursesScreen/coursesScreen";
import Privacy from "../components/Privacy/privacy";
import Policies from "../components/Policies/policies";
import Contact from "../components/Contact/contact";
import EducatorAccountMainPage from "../components/Auth/EducatorAccountMainPage/educatorAccountMainPage";
import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer/footer";
import { isUserExistMethod } from "../feature/Auth/authSlice";
import { useDispatch } from "react-redux";
import { FeatureFlags } from "../contexts/FeatureFlags";
import NewPageSample from "../components/CoursesScreen/NewPageSample";

const Router = () => {
  const location = useLocation();
  const { features } = React.useContext(FeatureFlags);

  return (
    <div>
      {location.pathname !== "/educator-account" ? <Navbar /> : ""}
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/about" element={<OurMission />}></Route>
        {features.showCourses ? (
          <Route exact path="/courses" element={<CoursesScreen />}></Route>
        ) : (
          <Route exact path="/courses" element={<NewPageSample />}></Route>
        )}
        <Route
          exact
          path="/become-educator"
          element={<BecomeEducator />}
        ></Route>
        <Route exact path="/how-it-works" element={<HowItWorks />}></Route>
        <Route exact path="/educator-faq" element={<EducatorFaq />}></Route>
        <Route exact path="/learner-faq" element={<LearnerFaq />}></Route>
        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/policies" element={<Policies />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          exact
          path="/educator-account"
          element={<EducatorAccountMainPage />}
        ></Route>
      </Routes>
      {location.pathname !== "/educator-account" ? <Footer /> : ""}
    </div>
  );
};

export default Router;
