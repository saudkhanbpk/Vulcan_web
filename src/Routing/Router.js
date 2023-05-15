import React from "react";
import { Routes, Route } from "react-router-dom";
import OurMission from "./../components/ourMission/OurMission";
import HomeScreen from "../components/Home/homeScreen/HomeScreen";
import BecomeEducator from "../components/BecomeEducator/BecomeEducator";
import HowItWorks from "../components/howItWorks/HowItWorks";
import EducatorFaq from "../components/howItWorks/faq/EducatorFaq";
import LearnerFaq from "../components/howItWorks/faq/LearnerFaq";
import CoursesScreen from "../components/coursesScreen/CoursesScreen";

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
        
      </Routes>
    </div>
  );
};

export default Router;
