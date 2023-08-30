import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "react-bootstrap";
import { Typography } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function DialogBox({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
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
            padding: 20,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          id="draggable-dialog-title"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" color="initial" p={2}>
              About Me text is less than 2000 characters
            </Typography>
          </Stack>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
