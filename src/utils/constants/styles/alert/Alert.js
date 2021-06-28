import { Alert, AlertTitle } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

export default function snackbarSetting(closeSnackbar, alertProps, alertTitle) {
  return {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    preventDuplicate: true,
    autoHideDuration: 3000,
    content: (key, msg) => (
      <Alert
        style={{ minWidth: "240px" }}
        onClose={() => closeSnackbar(key)}
        severity={alertProps?.color}
        {...alertProps}
      >
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        <Typography variant="body2" color="inherit">
          {msg}
        </Typography>
      </Alert>
    ),
  };
}
