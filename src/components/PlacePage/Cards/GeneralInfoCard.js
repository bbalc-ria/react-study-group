import React from "react";
import * as S from "./GeneralInfoCardStyles";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import GradeIcon from "@material-ui/icons/Grade";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ShareIcon from "@material-ui/icons/Share";
import AddReview from "../AddReview";
import PinDropIcon from "@material-ui/icons/PinDrop";
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
    borderRadius: "0px",
    marginRight: "20px"
  },
  generalInfo: {
    margin: "3% 20%"
  },
  scaledRating: {
    scale: "1.5"
  }
}));

function GeneralInfoCard(props) {
  const [value, setValue] = React.useState(2.6);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <S.Container>
        <Paper elevation={1} square className={classes.generalInfo}>
          <S.EffectiveContainer>
            <S.Title>Title Placeholder</S.Title>
            <StyledRating
              readOnly
              name="customized-color"
              value={value}
              precision={0.2}
              className={classes.scaledRating}
              size={"large"}
              icon={<GradeIcon fontSize="inherit" />}
            />
            <S.RatingValue>{value} out of 5</S.RatingValue>
            <S.ButtonsRow>
              <Tooltip title="Add a review!">
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={handleOpen}
                  className={classes.squareButton}
                >
                  <RateReviewIcon />
                  Review
                </Button>
              </Tooltip>
              <Tooltip title="Add a photo!">
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.squareButton}
                >
                  <AddAPhotoIcon />{" "}
                </Button>
              </Tooltip>
              <Tooltip title="Share this Location">
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.squareButton}
                >
                  <ShareIcon />
                </Button>
              </Tooltip>
            </S.ButtonsRow>
          </S.EffectiveContainer>
          <S.EffectiveContainer></S.EffectiveContainer>
        </Paper>
      </S.Container>
      <AddReview open={openModal} handleClose={handleClose} />
      <div href={`https://www.google.com/maps/dir//${props.lat},${props.lng}`}>
        <Button variant="outlined" color="primary">
          <PinDropIcon />
          Get directions!
        </Button>
      </div>
    </>
  );
}

export default GeneralInfoCard;
