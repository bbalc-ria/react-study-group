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
    overflow: "scroll",
    top: "15%",
    height: "70%",
    left: "20%",
    position: 'absolute',
    justifySelf: "center",
    width: "60%",
    backgroundColor: "snow",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  textArea: {
    fontSize: "1em",
    marginTop: "30px",
    width: "500px",
    marginBottom: "5px",
  },
  title: {
  },
  ratingName: {
    position: "absolute"
  },
  addPhotoButton: {
    marginRight: "10px"
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
    let images = event.target.files.map(x => URL.createObjectURL(x))
    setPictures(...pictures, ...images);
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
                setHover(newHover);
              }}
              precision={1}
              IconContainerComponent={IconContainer}

            />
          </Box>
          <TextareaAutosize className={classes.textArea} width={"300px"} rowsMax={30} aria-label="minimum height" rows={10} placeholder="Tell us about your experience" />

        </div>
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
        {pictures.map((image, i) => <EditableImagePreviewer image={image} id={i} deleteImage={deleteImage}></EditableImagePreviewer>)}
      </div>
    </Modal >
  )
}
