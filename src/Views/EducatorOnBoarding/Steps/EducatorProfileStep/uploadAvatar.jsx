import { Box, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "../../../../Assets/Images/vector.png";

export const UploadAvatar = () => {
  const [preview, setPreview] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
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
        <Box
          sx={style}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar
            alt="Remy Sharp"
            width={250}
            height={250}
            onCrop={onCrop}
            onClose={onClose}
          />
        </Box>
      </Modal>
      <img
        src={preview ? preview : ProfileImage}
        height={200}
        width={200}
        alt="Preview"
      />
      <IconButton
        aria-label="Edit"
        size="small"
        onClick={handleOpen}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          color: "blue",
          bgcolor: "white",
        }}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
};
