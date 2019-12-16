import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../../../App";
import { width } from "@material-ui/system";
import { ImageService } from "../../../services/ImageService";
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
  }
}));

function ReviewReadOnly(props) {
  const classes = useStyles(props);
  const [showPhotos, setshowPhotos] = useState(false);
  const [tags, settags] = useState();
  const [photos, setphotos] = useState();
  useEffect(() => {
    console.log("ReviewIReceive", props.review);
    settags(props.review.tags.split("#").splice(1));
  }, [props.review]);
  const context = useContext(AuthContext);

  let handlePhotos = () => {
    setphotos(ImageService.getImagesReview(props.review.images));
    console.log("sfkdskf");
    setshowPhotos(true);
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
                    toggleEdit={props.toggleEdit}
                  />
                </S.Menu>
              </S.Details>
            </S.DetailsContainer>

            <S.Content>{props.review.text}</S.Content>
          </S.CommentContaierBody>
        </S.CommentContainer>
        <S.GalleryContaier>
          {tags && (
            <S.TagList>
              {tags.map(tagg => (
                <S.Tag key={tagg}>#{tagg.trim()}</S.Tag>
              ))}
            </S.TagList>
          )}

          <S.BasicLine>
            {props.review.images &&
              props.review.images !== [] &&
              (!showPhotos ? (
                <S.ShowPhotos onClick={handlePhotos}>
                  See Photos...
                </S.ShowPhotos>
              ) : (
                photos && (
                  <Gallery
                    images={
                      photos &&
                      photos.map(x => {
                        console.log(x);
                        return {
                          src: x,
                          thumbnail: x,
                          caption: "This is a placeholder captions"
                        };
                      })
                    }
                    enableImageSelection={false}
                  />
                )
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
      </Paper>
    </S.Container>
  );
}

export default ReviewReadOnly;
