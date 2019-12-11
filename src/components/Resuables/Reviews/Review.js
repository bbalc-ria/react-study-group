import React, { useState, useEffect } from "react";
import * as S from "./ReviewStyle";
import Rating from "@material-ui/lab/Rating";
import GradeIcon from "@material-ui/icons/Grade";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-grid-gallery";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Paper, Tooltip } from "@material-ui/core";
import { theme } from "../Theme";
import CustomizedMenus from "./ControlledMenu";
import { UserService } from "../../../services/UserService";
const StyledRating = withStyles({
  iconFilled: {
    color: "#005858 "
  },
  iconHover: {
    color: "#005858 "
  },
  width: "fitContet"
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
    color: props.score > 0 ? "gold" : "darkred",
    padding: "7px",
    cursor: "default",
    borderRadius: "0px"
  }),
  paper: {
    padding: "10px",
    psotion: "relative"
  }
}));

const imagesPlaceholder = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/F25yrKgW3p5TFLoZ8FYUKw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/mD6Jws_iBBds2uRxefv1Fg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/9LihxkSH3zdAqtGCkn2VDQ/o.jpg"
];
function Review(props) {
  const classes = useStyles(props);
  const [showPhotos, setphowPhotos] = useState(false);
  const [user, setuser] = useState();
  const [tags, settags] = useState()

  useEffect(() => {
    console.log("ReviewIReceive", props.review);
    settags(props.review.tags.split("#").splice(1));

  }, [])

  let images = imagesPlaceholder.map(x => {
    return { src: x, thumbnail: x, thumbnailWidth: 10, thumbnailHeight: 10 };
  });

  return (
    <S.Container>
      <Paper elevation="2" square className={classes.paper}>
        <S.CommentContainer>
          <S.AvatarContainer>
            <S.Avatar src="https://picsum.photos/id/272/200/200" />
            <S.Author>
              {props.review.user && props.review.user.firstName + " " + props.review.user.lastName}
              <S.Badge count={props.review.user && props.review.user.nrReviews}>{props.review.user && props.review.user.nrReviews}</S.Badge>
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
                  {/* TODO MAKE DATE WORKS WITHOUT WORK AROUND */}

                  {new Date(props.review.date).getDate() +
                    "/" +
                    (new Date(props.review.date).getMonth() + 1) +
                    "/" +
                    new Date(props.review.date).getFullYear()}
                </S.Date>

                <S.Menu>
                  <Tooltip title="Show options!">
                    <CustomizedMenus handleDelete={() => props.handleDelete(props.review.id)} owned={props.review.userId === UserService.getCurrentUser().id} />
                  </Tooltip>
                </S.Menu>
              </S.Details>
            </S.DetailsContainer>

            <S.Content>
              {props.review.text}
            </S.Content>
          </S.CommentContaierBody>
        </S.CommentContainer>
        <S.GalleryContaier>
          {tags &&
            <S.TagList>
              {tags.map(tagg => (<S.Tag>#{tagg.trim()}</S.Tag>))}
            </S.TagList>
          }

          <S.BasicLine>
            {props.photos &&
              (!showPhotos ? (
                <S.ShowPhotos onClick={() => setphowPhotos(true)}>
                  See Photos...
                </S.ShowPhotos>
              ) : (
                  <Gallery images={images} enableImageSelection={false} />
                ))}
          </S.BasicLine>
          <S.Feedback>
            <div className={classes.Score}>1</div>{" "}
            <div className={classes.Like}>
              <ThumbUpIcon />
            </div>
          </S.Feedback>
        </S.GalleryContaier>
      </Paper>
    </S.Container>
  );
}

export default Review;
