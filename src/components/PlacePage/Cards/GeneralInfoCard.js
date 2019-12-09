import React from "react";
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
import AddReview from "../Modals/AddReview";
import WebIcon from "@material-ui/icons/Web";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactInfo from "../Modals/ContactInfo";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  const classes = useStyles();
  let date = new Date();

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
  let handleOpenNow = () => {

    let today = new Date();
    let i = today.getDay();
    let currentHour = today.getHours() + ":" + today.getMinutes();
    console.log("currentHour", currentHour);
    let hours = props.place.hours[i];
    console.log("hours", hours);
    return (currentHour.localeCompare(hours.open) > 0 && (currentHour.localeCompare(hours.close) < 0))
  };

  return (
    <>
      <Paper elevation={1} square className={classes.generalInfo}>
        <S.Line>
          <S.EffectiveContainer>
            <S.Title>{props.place.title}</S.Title>

            <S.Line>
              <Tooltip title="Current Rating is:">
                <StyledRating
                  readOnly
                  name="customized-color"
                  value={props.place.rating_mean}
                  precision={0.2}
                  size={"large"}
                  icon={<GradeIcon fontSize="inherit" />}
                />
              </Tooltip>
              {handleOpenNow() ? (
                <S.OpenStatus>Open now!</S.OpenStatus>
              ) : (
                  <S.OpenStatus closed>Closed now!</S.OpenStatus>
                )}
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
              <Tooltip title="Share this Location">
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.squareButton}
                >
                  <ShareIcon className={classes.buttonIcon} />
                </Button>
              </Tooltip>
            </S.ButtonsRow>
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
                (window.location.href = `https://www.google.com/maps/dir//${props.lat},${props.lng}`)
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
                      key={"Test"}
                      className={
                        date.getDay() == (index + 1) % 7
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
            <S.SpecialList>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#GoodDelivery</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#OldButGold</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#SureIllEatAgain</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#ChineeseFood</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#ReasonablePrices</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#BioProducts</S.SpecialLi>
              </Tooltip>
              <Tooltip title="20" placement="right">
                <S.SpecialLi>#BestInTown</S.SpecialLi>
              </Tooltip>

              <S.SpecialLi></S.SpecialLi>
            </S.SpecialList>
          </S.EffectiveContainerBeggining>
        </S.Line>
        <S.Line>
          <S.EffectiveContainerBeggining>
            <S.Subtitle>Description</S.Subtitle>
            <S.Description>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </S.Description>
          </S.EffectiveContainerBeggining>
        </S.Line>
        <S.Line>
          <S.EffectiveContainer>
            <S.Reviews>
              <Review photos={false}></Review>
              <Review photos={true}></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
            </S.Reviews>
          </S.EffectiveContainer>
        </S.Line>
      </Paper>

      <AddReview open={openAddReview} handleClose={handleCloseReview} />
      <ContactInfo open={openInfo} handleClose={handleCloseInfo}></ContactInfo>
    </>
  );
}

export default GeneralInfoCard;
