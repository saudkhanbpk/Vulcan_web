import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurMission from "./../components/ourMission/OurMission";
import CourcesScreen from "../components/coursesScreen/CourcesScreen";
import HomeScreen from "../components/Home/homeScreen/HomeScreen";
import BecomeEducator from "../components/BecomeEducator/BecomeEducator";
import HowItWorks from "../components/howItWorks/HowItWorks";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/about-us" element={<OurMission />}></Route>
        <Route exact path="/courses" element={<CourcesScreen />}></Route>
        <Route
          exact
          path="/become-educator"
          element={<BecomeEducator />}
        ></Route>
        <Route exact path="/how-it-works" element={<HowItWorks />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
