import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Modal from '@material-ui/core/Modal';
import GradeIcon from '@material-ui/icons/Grade';
import { TextareaAutosize, Tooltip, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditableImagePreviewer from '../Resuables/EditableImagePreviewer/ImagePreviewer';
import Comment from '../Resuables/Comments/Comment';
import { blockStatement } from '@babel/types';


const labels = {
  1: 'Poor!',
  2: 'Ok!',
  3: 'Good!',
  4: 'Very Good!',
  5: 'Excellent!',
};


const StyledRating = withStyles({
  iconFilled: {
    color: '#005858 ',
  },
  iconHover: {
    color: '#005858 ',
  },
})(Rating);



const useStyles = makeStyles(theme => ({
  paper: {
    top: "10%",
    height: "80%",
    left: "15%",
    position: 'relative',
    justifySelf: "center",
    width: "70%",
    background: "#f2f2f2",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: "15px",
    display: "flex",
    overflow: "scroll",
  },

  textArea: {
    fontSize: "1em",
    marginTop: "50px",
    width: "100%",
    marginBottom: "50px",
  },
  title: {
    top: "0px",
    flex: 1,
    flexGrow: 30,
    flexDirection: "column",
    position: "sticky",
    margin: "0 15px",
  },
  comments: {
    flex: 1,
    flexGrow: "50",
    flexDirection: "column",

  },
  ratingName: {
    position: "absolute"
  },
  addPhotoButton: {
    marginRight: "15px"
  }
}));


function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip arrow title={labels[value] || ''}>
      <span {...other} />
    </Tooltip>
  );
}



export default function AddReview(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const [hover, setHover] = React.useState(-1);
  const [pictures, setPictures] = React.useState([])

  let handleImageChange = (event) => {
    let images = [];
    Object.entries(event.target.files).forEach(x => images.push(URL.createObjectURL(x[1])));
    console.log("imgs", images);
    setPictures([...pictures, ...images]);
  }
  let deleteImage = (key) => {
    let auxPictures;
    pictures.forEach((x, i) => { if (i != key) auxPictures.push(x) });
    setPictures(auxPictures)
  }

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
                setHover(newHover)
              }}
              precision={1}
              IconContainerComponent={IconContainer}

            />
          </Box>
          <TextareaAutosize resize="none" className={classes.textArea} rowsMax={30} aria-label="minimum height" rows={10} placeholder="Tell us about your experience" />

          <Box>
            <Tooltip title="Add a photo!">
              <Button
                variant="contained"
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

            <Button variant="contained">
              Submit</Button>

          </Box>
          {console.log(pictures)}
          {pictures && pictures.map((image, i) => <EditableImagePreviewer image={image} id={i} deleteImage={deleteImage}></EditableImagePreviewer>)}
        </div>

        <div className={classes.comments}>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
      </div>
    </Modal >
  )
}
