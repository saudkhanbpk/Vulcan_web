import { Modal, Box } from "@mui/material";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "../../../../Assets/Images/vector.png";
import { AvatarBox } from "../../styles";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";

export const UploadAvatar = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = React.useState(false);
  const userData = useSelector((state) => state.userData.data);
  const avatar = userData?.educator?.profile?.avatar
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (preview) {
      onUpload(preview);
      console.log(preview)
    }
    setOpen(false);
  };
  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  return (
    <div style={{ position: "relative" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "hidden" }}
      >
        <AvatarBox
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar
            alt="Remy Sharp"
            width={260}
            height={260}
            onCrop={onCrop}
            onClose={onClose}
          />
          <Box
            style={{
              borderRadius: "50%",
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "#0000FF",
              padding: "3px",
            }}
            onClick={handleClose}
          >
            <CheckIcon style={{ color: "#FFFFFF" }} />
          </Box>
        </AvatarBox>
      </Modal>
      <Box display="flex" justifyContent="center" alignItems="center">
        {console.log("avatar", avatar)}
        <img
          src={avatar || preview ? preview : ProfileImage} 
          // src={avatar}
          height={200}
          width={200}
          alt="Preview"
        />
      </Box>
      <Box
        onClick={handleOpen}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          color: "blue",
          bgcolor: "white",
          borderRadius:"50%",
          border: "1px solid grey",
        }}
        p={0.5}
      >
        <EditIcon />
      </Box>
    </div>
  );
};
