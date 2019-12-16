import React, { useEffect, useState, useRef } from "react";
import * as S from "./GeneralInfoCardStyles";
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import GradeIcon from "@material-ui/icons/Grade";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ShareIcon from "@material-ui/icons/Share";
import AddReview from "../Modals/AddReview/AddReview";
import WebIcon from "@material-ui/icons/Web";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactInfo from "../Modals/ContactInfo";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ReviewService } from "../../../services/ReviewService";
import Review from "../../Resuables/Reviews/Review";

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      backgroundColor: "rgba(0,0,0,0.1)",
      color: theme.palette.common.black
    },
    body: {
      fontStyle: "bolder",
      fontSize: "17px"
    }
  })
)(TableCell);

const StyledRating = withStyles({
  iconFilled: {
    color: "#008080"
  },
  iconHover: {
    color: "#008080"
  }
})(Rating);

const useStyles = makeStyles(theme => ({
  squareButton: {
    marginRight: "20px"
  },
  generalInfo: {
    // margin: "3% 40% 3% 2%"
  },

  mainButtons: {
    width: "50%",
    margin: "auto"
  },
  buttonIcon: {
    marginRight: "5px"
  },
  CurrentDay: {
    background: theme.palette.primary[500],
    fontStyle: "bolder; !important",
    fontSize: "20px; !important"
  }
}));

function GeneralInfoCard(props) {
  const [openAddReview, setOpenReview] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [reviews, setreviews] = useState();
  const [open, setOpen] = React.useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    scrollToRef(myRef);
    setreviews(ReviewService.getReviewsForPlace(props.place.id));
  }, []);

  const classes = useStyles();
  let date = new Date();

  const ScrollDemo = () => {
    console.log("FFF");
    scrollToRef(myRef);
  };
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(true);
  };
  const handleOpenReview = () => {
    setOpenReview(true);
  };
  const handleCloseReview = () => {
    setOpenReview(false);
  };
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleDeleteReview = id => {
    debugger;
    var succeded = ReviewService.Delete(id);
    if (succeded) setreviews(ReviewService.getReviewsForPlace(props.place.id));
  };
  function toDate(dStr) {
    var now = new Date();
    now.setHours(dStr.substr(0, dStr.indexOf(":")));
    now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
    now.setSeconds(0);
    return now;
  }

  let handleOpenNow = () => {
    let today = new Date();
    let i = today.getDay();
    let currentHour = toDate(today.getHours() + ":" + today.getMinutes());
    console.log("currentHour", currentHour);

    let hours = props.place.hours[i];
    console.log("hours", toDate(hours.open));
    return (
      currentHour > toDate(hours.open) && currentHour < toDate(hours.close)
    );
  };

  return (
    <>
      <Paper elevation={1} square className={classes.generalInfo}>
        <S.Line>
          <S.EffectiveContainer>
            <S.TitleContainer>
              <S.Title>{props.place.title}</S.Title>
              {handleOpenNow() ? (
                <S.OpenStatus>Open now!</S.OpenStatus>
              ) : (
                <S.OpenStatus closed>Closed now!</S.OpenStatus>
              )}
            </S.TitleContainer>
            <S.Line>
              <Tooltip title="Current Rating is:">
                <StyledRating
                  readOnly
                  name="customized-color"
                  value={props.place.rating / props.place.ratings}
                  precision={0.2}
                  size={"large"}
                  icon={<GradeIcon fontSize="inherit" />}
                />
              </Tooltip>
            </S.Line>
            <S.ButtonsRow>
              <Tooltip title="Add a review!">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleOpenReview}
                  className={classes.squareButton}
                >
                  <RateReviewIcon className={classes.buttonIcon} />
                  Review
                </Button>
              </Tooltip>
              <Tooltip title="Add a photo!">
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.squareButton}
                >
                  <AddAPhotoIcon className={classes.buttonIcon} />{" "}
                </Button>
              </Tooltip>
              <Tooltip
                PopperProps={{
                  disablePortal: true
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Link copied to clipboard!"
              >
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.squareButton}
                  onClick={handleTooltipOpen}
                >
                  <ShareIcon className={classes.buttonIcon} />
                </Button>
              </Tooltip>
            </S.ButtonsRow>
            <S.Category>{" " + props.place.category}</S.Category>
          </S.EffectiveContainer>
          <S.EffectiveContainer>
            <S.Button
              className={classes.mainButtons}
              onClick={handleOpenInfo}
              color="primary"
            >
              <ContactPhoneIcon className={classes.buttonIcon} />
              {"Contact"}
            </S.Button>
            <S.Button
              onClick={() =>
                (window.location.href = `https://www.google.com/maps/dir//${props.place.location.lat},${props.place.location.lng}`)
              }
              className={classes.mainButtons}
            >
              <PinDropIcon className={classes.buttonIcon} />
              Get directions
            </S.Button>

            <S.Button
              className={classes.mainButtons}
              onClick={() =>
                (window.location.href = `http://www.gandhicluj.ro/`)
              }
            >
              <WebIcon className={classes.buttonIcon} />
              Go To Site
            </S.Button>
          </S.EffectiveContainer>
        </S.Line>
        {/* //////////////////////////////////////////to here is first segnemt of the card */}
        <S.Line>
          <S.EffectiveContainer>
            <S.Table>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Day of the week</StyledTableCell>
                    <StyledTableCell align="center">
                      Starting hours
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Closing hours
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {days.map((day, index) => (
                    <TableRow
                      key={"day" + index}
                      className={
                        date.getDay() === (index + 1) % 7
                          ? classes.CurrentDay
                          : ""
                      }
                    >
                      <TableCell component="th" scope="row">
                        {day}
                      </TableCell>
                      <TableCell align="center">9:30</TableCell>
                      <TableCell align="center">22:30</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </S.Table>
          </S.EffectiveContainer>
          <S.EffectiveContainerBeggining>
            <S.Subtitle color="secondary">#PopularTags:</S.Subtitle>

            <S.PopularTagsList onClick={ScrollDemo}>
              {props.place.popular_tags.map(x => (
                <Tooltip key={x.value} title={x.nr} placement="right">
                  <S.PopularTagsLi>{x.value}</S.PopularTagsLi>
                </Tooltip>
              ))}
            </S.PopularTagsList>
          </S.EffectiveContainerBeggining>
        </S.Line>
        <S.Line>
          <S.EffectiveContainerBeggining>
            <S.Subtitle>Description</S.Subtitle>
            <S.Description>{props.place.description}</S.Description>
          </S.EffectiveContainerBeggining>
        </S.Line>
        <S.Line>
          <S.EffectiveContainer>
            <S.Reviews ref={myRef}>
              {reviews &&
                reviews.map(x => (
                  <Review
                    key={x.id}
                    handleDelete={handleDeleteReview}
                    review={x}
                  ></Review>
                ))}
            </S.Reviews>
          </S.EffectiveContainer>
        </S.Line>
      </Paper>

      <AddReview
        reviews={reviews}
        open={openAddReview}
        handleClose={handleCloseReview}
      />
      <ContactInfo
        open={openInfo}
        handleClose={handleCloseInfo}
        place={props.place}
      ></ContactInfo>
    </>
  );
}

export default GeneralInfoCard;
