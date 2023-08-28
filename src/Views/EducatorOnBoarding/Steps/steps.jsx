import React from "react";
import { CreateAccountStep } from "./CreateAccountStep/createAccountStep";
import { ExperienceStep } from "./ExperienceStep/experienceStep";
import { ReachStep } from "./ReachStep/reachStep";
import { EducatorProfileStep } from "./EducatorProfileStep/educatorProfileStep";
import { useSelector } from "react-redux";

const Steps = ({controlSteps}) => {
  const steps = useSelector((state) => state.educatorSteps.steps);
  return (
    <>
      {steps === 1 && <CreateAccountStep controlSteps={controlSteps}/>}
      {steps === 2 && <ExperienceStep controlSteps={controlSteps} />}
      {steps === 3 && <ReachStep  controlSteps={controlSteps} />}
      {steps === 4 && <EducatorProfileStep  controlSteps={controlSteps}/>}
    </>
  );
};

export default Steps;
