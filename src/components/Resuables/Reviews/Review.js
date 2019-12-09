import React, { useState } from "react";
import * as S from "./ReviewStyle";
import Rating from "@material-ui/lab/Rating";
import GradeIcon from "@material-ui/icons/Grade";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-grid-gallery";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Button, Paper, Tooltip } from "@material-ui/core";
import { theme } from "../Theme";
import ControlledOpenSelect from "./ControlledMenu";
import CustomizedMenus from "./ControlledMenu";
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
  const [date, setdate] = useState(new Date());
  const classes = useStyles(props);
  const [showPhotos, setphowPhotos] = useState(false);

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
              Istvan Borwinmingerr
              <S.Badge count={1001}>20022</S.Badge>
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
                  {console.log(date)}
                  {date.getDate() +
                    "/" +
                    (date.getMonth() + 1) +
                    "/" +
                    date.getFullYear()}
                </S.Date>

                <S.Menu>
                  <Tooltip title="Show options!">
                    <CustomizedMenus owned="true" />
                  </Tooltip>
                </S.Menu>
              </S.Details>
            </S.DetailsContainer>

            <S.Content>
              This place was awesome I'dd really want to visit it very soon, I
              hope it will happen GREAT!This place was awesome I'dd really want
              to visit it very soon, I hope it will happen GREAT!This place was
              awesome I'dd really want to visit it very soon, I hope it will
              happen GREAT!This place was awesome I'dd really want to visit it
              very soon, I hope it will happen GREAT!This place was awesome I'dd
              really want to visit it very soon, I hope it will happen GREAT!
            </S.Content>
          </S.CommentContaierBody>
        </S.CommentContainer>
        <S.GalleryContaier>
          <S.TagList>
            <S.Tag>#tag1</S.Tag>

            <S.Tag>#tttw</S.Tag>

            <S.Tag>#MediumTag</S.Tag>

            <S.Tag>#SuperMediumTag</S.Tag>

            <S.Tag>#LongSuperMediumTagSuperMediumTag</S.Tag>
            <S.Tag>#LongSuperMediumTagSuperMediumTag</S.Tag>
            <S.Tag>#LongSuperMediumTagSuperMediumTag</S.Tag>
            <S.Tag>#LongSuperMediumTagSuperMediumTag</S.Tag>
            <S.Tag>#LongSuperMediumTagSuperMediumTag</S.Tag>

            <S.Tag>#AnotherTag</S.Tag>
          </S.TagList>
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
