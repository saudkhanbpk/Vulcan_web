import React from "react";
import "./OurMission.scss";
import bringIm from "../Images/bringimg.png";

const OurMission = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 linear_back">
            <div className="ourmiss">
              <p className="mission_heading">Our Mission</p>
              <p className="connection">Connecting learners directly</p>
              <p className="connection"> with subject matter experts -</p>
              <p className="connection"> in any subject.</p>
            </div>
          </div>
          <div className="col-8 teacher_back" />
        </div>

        <div className="row Bring_row">
          <h2 className="text-center brigText">
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

        <div className="row">
          <h2 className="text-center Learn">Vulcan Learning Platform</h2>
          <div className="col-md-4">
            <h3 className="text-center text-primary">Univeral Access</h3>
            <div className="cardssInfo text-center">
              <p className="card_ptag">
                {" "}No GPA. No SAT. No assessment. No Application. Anyone can
                enroll in a course on the Vulcan Learning platform. We won’t
                turn our backs on learners.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center text-primary">Best Educators</h3>
            <div className="cardssInfo text-center">
              <p className="card_ptag">
                Our courses are taught by the top educators in a given field.
                Educators are vetted for demonstrated experience, skill, and
                character.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center text-primary">Personalized</h3>
            <div className="cardssInfo text-center">
              <p className="card_ptag">
                We offer a wide variety of courses with unique Educators,
                subjects, and teaching styles. This allows learners to choose
                the instructor, pace, and level that fits them best.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
