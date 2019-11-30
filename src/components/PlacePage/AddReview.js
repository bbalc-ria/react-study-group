import React from "react";
import {
  withStyles,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Modal from "@material-ui/core/Modal";
import { TextareaAutosize, Tooltip, Button, Input } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import EditableImagePreviewer from "../Resuables/EditableImagePreviewer/ImagePreviewer";
import Comment from "../Resuables/Comments/Comment";
import CloseIcon from "@material-ui/icons/Close";
import { theme } from "../Resuables/Theme";

const labels = {
  1: "Poor!",
  2: "Ok!",
  3: "Good!",
  4: "Very Good!",
  5: "Excellent!"
};

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
    top: "10%",
    height: "80%",
    left: "15%",
    position: "relative",
    justifySelf: "center",
    width: "70%",
    background: "#f2f2f2",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: "15px",
    display: "flex",
    overflow: "scroll"
  },

  textArea: {
    fontSize: "1em",
    marginTop: "50px",
    width: "100%",
    marginBottom: "50px"
  },
  title: {
    top: "0px",
    flex: 1,
    flexGrow: 30,
    flexDirection: "column",
    position: "sticky",
    margin: "0 20px"
  },
  comments: {
    flex: 1,
    flexGrow: "50",
    flexDirection: "column"
  },
  ratingName: {
    position: "absolute"
  },
  addPhotoButton: {
    borderRadius: "0px",
    marginRight: "15px"
  },
  squareButton: {
    borderRadius: "0px"
  },
  close: {
    top: "5px",
    right: "0px",
    borderRadius: "0px",
    position: "absolute !important",
    padding: "0px"
  }
}));

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip arrow title={labels[value] || ""}>
      <span {...other} />
    </Tooltip>
  );
}

export default function AddReview(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const [hover, setHover] = React.useState(-1);
  const [pictures, setPictures] = React.useState([]);

  let handleImageChange = event => {
    let images = [];
    Object.entries(event.target.files).forEach(x =>
      images.push(URL.createObjectURL(x[1]))
    );
    console.log("imgs", images);
    setPictures([...pictures, ...images]);
  };
  let deleteImage = key => {
    let auxPictures;
    pictures.forEach((x, i) => {
      if (i != key) auxPictures.push(x);
    });
    setPictures(auxPictures);
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.paper}>
        <div className={classes.title}>
          <h2 id="simple-modal-title">How was your experience?</h2>
          <Box>
            <StyledRating
              size="large"
              name="customized-color"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              precision={1}
              IconContainerComponent={IconContainer}
            />
          </Box>
          <TextareaAutosize
            resize="none"
            className={classes.textArea}
            rowsMax={30}
            aria-label="minimum height"
            rows={10}
            placeholder="Tell us about your experience"
          />

          <Box>
            <Button
              color="primary"
              className={classes.addPhotoButton}
              variant="contained"
            >
              Submit
            </Button>
            <Tooltip title="Add a photo!">
              <Button
                color="secondary"
                variant="outlined"
                component="label"
                className={classes.addPhotoButton}
              >
                <AddAPhotoIcon />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Button>
            </Tooltip>
          </Box>
          {console.log(pictures)}
          {pictures &&
            pictures.map((image, i) => (
              <EditableImagePreviewer
                image={image}
                id={i}
                deleteImage={deleteImage}
              ></EditableImagePreviewer>
            ))}
        </div>
        <div className={classes.comments}>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
        <Button className={classes.close}>
          <CloseIcon />
        </Button>
      </div>
    </Modal>
  );
}
