import { useContext } from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import { AlertContext } from "../../context/Alert";
import "../../styles/components/alert.scss";

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  return (
    <Snackbar
      open={alert.visible}
      autoHideDuration={3000}
      onClose={hideAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert onClose={hideAlert} severity={alert.type} variant="filled">
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
