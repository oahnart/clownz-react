import {
  createStyles,
  fade,
  InputBase,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";

export const useStylesForm = makeStyles((theme) =>
  createStyles({
    margin: {
      marginRight: theme.spacing(3.75),
    },
    label: {
      color: theme.palette.gray.grayDark1,
      fontSize: 20,
      fontWeight: 500,
    },
    select: {
      minWidth: "200px",
      maxWidth: "200px",
      "&:focus": {
        borderRadius: "4px",
      },
      "&:invalid": {
        color: fade(theme.palette.black.main, 0.4),
      },
      "& option": {
        color: theme.palette.blue.blueLight1,
      },
    },
    bootstrap: {
      borderRadius: 4,
      backgroundColor: theme.palette.white.main,
      "& .MuiInputBase-input": {
        padding: "3px 6px !important",
        fontSize: "14px",
      },
      "& .MuiOutlinedInput-root": {
        minHeight: 40,
        "& fieldset": {},
        "&:hover fieldset": {
          borderColor: "#ced4da",
        },
        "&.Mui-focused fieldset": {
          borderWidth: "1px",
          transition: theme.transitions.create(["border-color", "box-shadow"]),
          boxShadow: `${fade(theme.palette.blue.blueLight1, 0.25)} 0 0 0 2px`,
          borderColor: theme.palette.blue.blueLight1,
        },
        "&.Mui-disabled": {
          background: theme.palette.gray.grayDark1,
          color: theme.palette.gray.grayDark5,
        },
      },
    },
    viewInput: {
      border: "none !important",
      paddingLeft: "0 !important",
      pointerEvents: "none !important",
      "& input": {
        paddingLeft: 0,
      },
    },
  })
);

export const redMark = <span style={{ color: "#d70f0f" }}>*</span>;

export const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      minHeight: 40,
      padding: 0,
      border: "1px solid #ced4da",
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      overflow: "hidden",
    },
    input: {
      borderRadius: 4,
      position: "relative",
      fontSize: 14,
      padding: "8px",
    },
    focused: {
      // boxShadow: `${fade(theme.palette.blue.blueLight1, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.blue.blueLight1,
    },
    error: {
      // boxShadow: `${fade(theme.palette.blue.blueLight1, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.red.redLight1,
    },
    disabled: {
      backgroundColor: theme.palette.gray.grayDark1,
      color: theme.palette.black.main,
    },
  })
)(InputBase);
