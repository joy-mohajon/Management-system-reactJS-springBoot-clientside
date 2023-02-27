import { Alert } from "@mui/material";
import React from "react";

const AlertMessage = ({ text }) => {
  return (
    <Alert
      variant="filled"
      severity="success"
      color=""
      sx={{
        width: "250px",
        height: "38px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {text}
    </Alert>
  );
};

export default AlertMessage;
