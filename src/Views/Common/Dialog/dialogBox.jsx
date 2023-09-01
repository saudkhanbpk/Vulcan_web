import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export default function DialogBox({ open, setOpen, message }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <CloseIcon
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            fontSize: "2rem",
          }}
          color="primary"
        />
        <DialogTitle
          style={{
            cursor: "move",
            padding: "50px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {message}
        </DialogTitle>
      </Dialog>
    </div>
  );
}
