import React from "react";
import "./OurMission.scss";
import bringIm from "../../assets/images/bringimg.png";

const OurMission = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-4 linear_back">
            <div className="ourmiss">
              <p className="mission_heading text-start">Our Mission</p>
              <p className="connection">Connecting learners directly</p>
              <p className="connection"> with subject matter experts -</p>
              <p className="connection"> in any subject.</p>
            </div>
          </div>
     
         <div className="col-8 teacher_back" />
        
        </div>

        <div className="row Bring_row">
          <h2 className="text-center brigText mb-5">
            Bringing Education into the 21st century
          </h2>
          <div className="col-md-6">
            <div>
              <img src={bringIm} className="img-fluid brinaaimg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="bring-paratext mt-5">
              Education is a core pillar of our society. But the current system
              hasn’t been working for everyone. It’s been plagued with ever
              rising costs, long timeframes, unsatisfactory outcomes, and high
              barriers to entry.{" "}
            </p>
            <p className="bring-paratext mt-4">
              We asked the question: What would an education system that works
              for everyone look like? The Vulcan Learning platform was the
              answer.
            </p>
          </div>
        </div>

        <div className="row mt-2 mb-2 align-center">
          <h2 className="text-center Learn mb-5">Vulcan Learning Platform</h2>
          <div className="col-md-4 col-sm-8 ">
            <h3 className="h3 text-center  fs-2 sub-heading ">Univeral Access</h3>
            <div className="cardssInfo text-center">
              <p className="card_ptag fs-4 pt-2  text-start">
                {" "}No GPA. No SAT. No assessment. No Application. Anyone can
                enroll in a course on the Vulcan Learning platform. We won’t
                turn our backs on learners.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4  col-sm-8">
            <h3 className="text-center text-primary fs-2 sub-heading">Best Educators</h3>
            <div className="cardssInfo text-center">
              <p className="card_ptag fs-4 pt-2  text-start">
                Our courses are taught by the top educators in a given field.
                Educators  are vetted for demonstrated experience, skill, and
                character.{" "}
              </p>
            </div>
          </div>

          <div className="col-md-4  col-sm-8">
            <h3 className="text-center text-primary fs-2 sub-heading">Personalized</h3>
            <div className="cardssInfo text-center ">
              <p className="card_ptag fs-4 pt-2  text-start">
                We offer a wide variety of courses with unique Educators,
                subjects, and teaching styles. This allows learners to choose
                the instructor, pace, and level that fits them best.{" "}
              </p>
            </div>
          </div>

          <p className="text-decoration-underline fw-normal h3 pt-5 pb-5">Learn more about how the Vulcan Learning platform works</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
