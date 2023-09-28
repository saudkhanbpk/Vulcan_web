import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styles } from "../../Home/WelcomeBox/styles";
import { Message } from "./style";

export default function DialogBox({ open, setOpen, message }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Message variant="body2">
          {message}
          </Message>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={styles.textCapitalize}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
