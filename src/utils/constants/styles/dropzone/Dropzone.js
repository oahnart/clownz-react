import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import makeStyles from "@material-ui/styles/makeStyles";
import { Box } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(({ palette }) => ({
  dropzone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 128,
    opacity: 0.3,
    borderRadius: 4,
    backgroundColor: palette.gray.grayLight9,
  },
}));

const DropZone = (props) => {
  const classes = useStyles();
  const { className, ...other } = props;
  const [files, setFileName] = useState([{ name: "" }]);
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      console.log(reader.result);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className={classes.dropzone} {...getRootProps()}>
      <Box
        component="i"
        className="li li-upload"
        fontSize={24}
        fontWeight="bold"
        color="black.main"
      ></Box>
      <Box component="span">Upload ảnh</Box>
      <input {...getInputProps()} />
    </div>
  );
};

DropZone.propTypes = {};

export default DropZone;
