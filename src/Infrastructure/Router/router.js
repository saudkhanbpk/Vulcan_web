import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { PrivateOutlet } from "./privateRoute";
import Error404 from "../../Views/Common/Error404/error404";
import { Account } from "../../Views/Account/account";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../States/userDataSlice";

const Router = () => {
  const location = useLocation();
  const { features } = React.useContext(FeatureFlags);
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const userData = useSelector((state) => state.userData.data);
  const onboardingComplete = userData?.educator?.onboarding_complete;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userId]);

  // Check if onboarding is complete and user is on "/educator-account" route
  // useEffect(() => {
  //   if (onboardingComplete && location.pathname === "/educator-account") {
  //     // Navigate to the home path ("/") when onboarding is complete
  //     navigate("/");
  //   }
  // }, [onboardingComplete, location.pathname, navigate]);
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
        <Route
          exact
          path="/educator-account"
          element={<EducatorAccountMainPage />}
        />
        <Route element={<PrivateOutlet />}>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/account"} element={<Account />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      {location.pathname !== "/educator-account" ? <Footer /> : ""}
    </div>
  );
};

export default Router;
