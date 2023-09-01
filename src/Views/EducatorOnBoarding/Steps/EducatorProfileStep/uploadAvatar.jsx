import { IconButton, Modal, Box } from "@mui/material";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "../../../../Assets/Images/vector.png";
import { AvatarBox } from "../../styles";

export const UploadAvatar = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (preview) {
      onUpload(preview);
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
            width={250}
            height={250}
            onCrop={onCrop}
            onClose={onClose}
          />
        </AvatarBox>
      </Modal>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={preview ? preview : ProfileImage}
          height={200}
          width={200}
          alt="Preview"
          style={{}}
        />
      </Box>
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
