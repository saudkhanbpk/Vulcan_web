import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import OurMission from "../../Views/OurMission/ourMission";
import BecomeEducator from "../../Views/BecomeEducator/becomeEducator";
import HowItWorks from "../../Views/HowItWorks/howItWorks";
import EducatorFaq from "../../Views/Faq/educatorFaq";
import LearnerFaq from "../../Views/Faq/learnerFaq";
import Privacy from "../../Views/Privacy/privacy";
import Policies from "../../Views//Policies/policies";
import Contact from "../../Views//Contact/contact";
import EducatorAccountMainPage from "../../Views/EducatorOnBoarding/educatorAccountMainPage";
import Navbar from "../../Views/Common/Header/navbar";
import Footer from "../../Views/Common/Footer/footer";
import { FeatureFlags } from "../../Infrastructure/featureFlags";
import { Courses } from "../../Views/CoursesScreen/courses";
import CoursesSoon from "../../Views/CoursesPage/coursesSoon";
import HomeScreen from "../../Views/Home/home";
import { Dashboard } from "../../Views/Dashboard/dashboard.jsx";
import { Profile } from "../../Views/Profile/profile";
import { PrivateOutlet } from "./PrivateRoute";
import Error404 from "../../Views/Common/Error404/error404";

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
 
        <Route path="*" element={<Error404 />} />
      </Routes>
      {location.pathname !== "/educator-account" ? <Footer /> : ""}
    </div>
  );
};

export default Router;
