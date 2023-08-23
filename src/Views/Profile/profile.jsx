import { Typography } from "@mui/material";
import React, { useState } from "react";
import { HeadingBox, MainBox } from "./styles";
import useAuthentication from "../../Infrastructure/States/onAuthStateChange";
import { NameBox } from "./ProfileBoxes/NameBox/nameBox";
import { PasswordBox } from "./ProfileBoxes/PasswordBox/passwordBox";
import { EmailBox } from "./ProfileBoxes/EmailBox/emailBox";
import { NumberBox } from "./ProfileBoxes/NumberBox/numberBox";
export const Profile = () => {
  const [showEditName, setShowEditName] = useState(false);
  const [showEditPass, setShowEditPass] = useState(false);
  const [showEditNumber, setShowEditNumber] = useState(false);
  const { user } = useAuthentication();
  const userFullName = user?.displayName;
  const userEmail = user?.email;
  const handleOpen = ({ prop }) => {
    if (prop === "name") {
      setShowEditName(true);
      setShowEditPass(false);
      setShowEditNumber(false);
    } else if (prop === "password") {
      setShowEditPass(true);
      setShowEditName(false);
      setShowEditNumber(false);
    } else if (prop === "number") {
      setShowEditNumber(true);
      setShowEditPass(false);
      setShowEditName(false);
    }
  };
  const handleClose = () => {
    setShowEditName(false);
    setShowEditPass(false);
    setShowEditNumber(false);
  };
  return (
    <MainBox>
      <HeadingBox p={5}>
        <Typography variant="h1" color={"primary"}>
          Profile
        </Typography>
      </HeadingBox>
      <EmailBox userEmail={userEmail} />
      <NameBox
        userFullName={userFullName}
        handleOpen={handleOpen}
        handleClose={handleClose}
        showEditName={showEditName}
        user={user}
      />
      <NumberBox
        handleOpen={handleOpen}
        handleClose={handleClose}
        showEditNumber={showEditNumber}
        user={user}
      />
      <PasswordBox
        handleOpen={handleOpen}
        handleClose={handleClose}
        showEditPass={showEditPass}
        user={user}
      />
    </MainBox>
  );
};
