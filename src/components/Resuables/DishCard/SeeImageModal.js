import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  },
  paper: {
    position: "relative",
    justifySelf: "center",
    width: "100%",
    height: "100%",
    background: "#000000",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: "15px",
    display: "flex",
    overflow: "scroll"
  },
  container: {
    marginTop: "10%",
    marginRight: "20%",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    fontSize: "20px",
    margin: "10px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    margin: "auto",
    maxWidth: "99%",
    maxHeight: "96%",
    marginTop: "1%"
  }
}));

export default function SeeImageModal(props) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <img className={classes.image} src={props.image}></img>
    </Modal>
  );
}
