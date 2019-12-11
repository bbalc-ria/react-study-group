import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Modal from "@material-ui/core/Modal";

import { theme } from "../../Resuables/Theme";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const StyledRating = withStyles({
  iconFilled: {
    color: "#005858 "
  },
  iconHover: {
    color: "#005858 "
  }
})(Rating);

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
    overflowX: "hidden",
    top: "20%",
    height: "30%",
    left: "35%",
    position: "relative",
    justifySelf: "center",
    width: "30%",
    background: "#f2f2f2",
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
  }
}));

export default function ContactInfo(props) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.paper}>
        <div className={classes.container}>
          <div className={classes.line}>
            <PhoneIcon /> {props.place.contact_phone}
          </div>
          <div className={classes.line}>
            <AlternateEmailIcon /> {props.place.contact_email}
          </div>
          <div className={classes.line}>
            <FacebookIcon /> <a>{props.place.contact_facebook}</a>
            <div className={classes.line}>
              <TwitterIcon /> <a>{props.place.contact_twitter}</a>
            </div>
            <div className={classes.line}>
              <InstagramIcon /> <a>{props.place.contact_instagram}</a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
