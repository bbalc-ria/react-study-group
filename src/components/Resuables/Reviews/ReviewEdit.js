import React, { useState, useEffect, useContext } from "react";
import * as S from "./ReviewStyle";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Paper, Box } from "@material-ui/core";
import { theme } from "../Theme";
import CustomizedMenus from "./ControlledMenu";
import { AuthContext } from "../../../App";
import { ImageService } from "../../../services/ImageService";
import GradeIcon from "@material-ui/icons/Grade";
import { TextareaAutosize, TextField, Button } from "@material-ui/core";
import EditableImagePreviewer from "../EditableImagePreviewer/ImagePreviewer";
import { ReviewService } from "../../../services/ReviewService";

const StyledRating = withStyles({
  iconFilled: {
    color: "#005858 "
  },
  iconHover: {
    color: "#005858 "
  }
})(Rating);

const useStyles = makeStyles(props => ({
  Like: props => ({
    background: props.liked ? "rgba(0,0,0,0.1)" : "",
    margin: "5px",
    color: "grey",
    borderRadius: "0%",
    "&:hover": {
      color: theme.palette.primary[500],
      cursor: "pointer"
    }
  }),

  Score: props => ({
    color: props.score > 0 ? "darkcyan" : "darkred",
    padding: "7px",
    cursor: "default",
    borderRadius: "0px"
  }),
  paper: {
    padding: "10px",
    psotion: "relative",
    width: "98%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  customButton: {
    display: "flex",
    alignSelf: "right",
    maxWidth: "100px",
    margin: "0px 40px 10px 60px"
  }
}));

function ReviewEdit(props) {
  const classes = useStyles(props);
  const [photos, setphotos] = useState();
  const [tags, settags] = useState(props.review.tags);
  const [text, settext] = useState(props.review.text);
  const [rImages, setrImages] = useState();
  useEffect(() => {
    setrImages(props.review.images);
    setphotos(ImageService.getImagesReviewObject(props.review.images));
  }, []);

  const context = useContext(AuthContext);

  let deleteImage = id => {
    console.log("ID", id);
    let images = [...rImages];
    setrImages(images.filter(x => x !== id));
    setphotos(photos.filter(x => x.id !== id));
  };
  let handleEdit = () => {
    let review = {
      ...props.review,
      text,
      tags,
      images: rImages,
      modifiedDate: Date.now()
    };
    ReviewService.Update(review);
  };
  return (
    <S.Container>
      <Paper elevation={2} square className={classes.paper}>
        <S.CommentContainer>
          <S.AvatarContainer>
            <S.Avatar src="https://picsum.photos/id/272/200/200" />
            <S.Author>
              {props.review.user &&
                props.review.user.firstName + " " + props.review.user.lastName}
              <S.Badge count={props.review.user && props.review.user.nrReviews}>
                {props.review.user && props.review.user.nrReviews}
              </S.Badge>
            </S.Author>
          </S.AvatarContainer>

          <S.CommentContaierBody>
            <S.DetailsContainer>
              <S.Details>
                <StyledRating
                  readOnly
                  name="customized-color"
                  value={3}
                  precision={0.2}
                  icon={<GradeIcon fontSize="inherit" />}
                />
                <S.Date>
                  {" created: "}
                  {/* TODO MAKE DATE WORKS WITHOUT WORK AROUND */}
                  {new Date(props.review.date).getDate() +
                    "/" +
                    (new Date(props.review.date).getMonth() + 1) +
                    "/" +
                    new Date(props.review.date).getFullYear()}
                  {props.review.modifiedDate &&
                    " last edited: " +
                      new Date(props.review.modifiedDate).getDate() +
                      "/" +
                      (new Date(props.review.modifiedDate).getMonth() + 1) +
                      "/" +
                      new Date(props.review.modifiedDate).getFullYear()}
                </S.Date>

                <S.Menu>
                  <CustomizedMenus
                    handleDelete={() => props.handleDelete(props.review.id)}
                    owned={props.review.userId === context.userId}
                  />
                </S.Menu>
              </S.Details>
            </S.DetailsContainer>
            <TextareaAutosize
              resize="none"
              className={classes.textArea}
              rowsMax={30}
              aria-label="minimum height"
              rows={10}
              placeholder="Tell us about your experience"
              value={text}
              onChange={x => settext(x.target.value)}
            />
            <TextField
              multiline
              className={classes.textField}
              id="standard-basic"
              value={tags}
              placeholder="Each space separated group will be considered a tag"
              onChange={x => settags(x.target.value)}
            />
          </S.CommentContaierBody>
        </S.CommentContainer>
        <S.GalleryContaier>
          <S.BasicLine>
            {rImages &&
              photos &&
              photos.map(image => (
                <EditableImagePreviewer
                  image={image}
                  deleteImage={deleteImage}
                ></EditableImagePreviewer>
              ))}
          </S.BasicLine>
          <S.Feedback>
            <div score={props.review.score} className={classes.Score}>
              {props.review.score}
            </div>{" "}
            <div className={classes.Like}>
              <ThumbUpIcon
                color={
                  props.review.usersThatScored.filter(x => x === context.userId)
                    .length > 0
                    ? "darkcyan"
                    : ""
                }
              />
            </div>
          </S.Feedback>
        </S.GalleryContaier>
        <Box>
          <Button
            color="primary"
            variant="contained"
            className={classes.customButton}
            onClick={handleEdit}
          >
            Save
          </Button>
          <Button
            color="secondary"
            variant="contained"
            className={classes.customButton}
            onClick={props.handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </S.Container>
  );
}

export default ReviewEdit;
