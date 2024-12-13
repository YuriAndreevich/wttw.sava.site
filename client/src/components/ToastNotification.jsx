import  { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const ToastNotification = () => {
  const [open, setOpen] = useState(false);
  const [message] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };



  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
