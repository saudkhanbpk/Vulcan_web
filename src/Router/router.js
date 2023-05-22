import React from "react";
import { Routes, Route } from "react-router-dom";
import OurMission from "../components/OurMission/ourMission";
import HomeScreen from "../components/Home/HomeScreen/homeScreen";
import BecomeEducator from "../components/BecomeEducator/becomeEducator";
import HowItWorks from "../components/HowItWorks/howItWorks";
import EducatorFaq from "../components/HowItWorks/Faq/educatorFaq";
import LearnerFaq from "../components/HowItWorks/Faq/learnerFaq";
import CoursesScreen from "../components/CoursesScreen/coursesScreen";
import SignUp from "../components/Auth/SignUp/signUp";
import Login from "../components/Auth/Login/login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/about" element={<OurMission />}></Route>
        <Route exact path="/courses" element={<CoursesScreen />}></Route>
        <Route
          exact
          path="/become-educator"
          element={<BecomeEducator />}
        ></Route>
        <Route exact path="/how-it-works" element={<HowItWorks />}></Route>
        <Route exact path="/educator-faq" element={<EducatorFaq />}></Route>
        <Route exact path="/learner-faq" element={<LearnerFaq />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
