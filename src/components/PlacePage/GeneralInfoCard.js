import React from 'react'
import * as S from './GeneralInfoCardStyles';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import GradeIcon from '@material-ui/icons/Grade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShareIcon from '@material-ui/icons/Share';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#005858 ',
  },
  iconHover: {
    color: '#005858 ',
  },
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}



function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function GeneralInfoCard() {

  const [value, setValue] = React.useState(2.6);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
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

        <Paper elevation={1}>
          <S.EContainer>
            <S.EffectiveContainer>
              <S.Title>
                Title Placeholder
                          </S.Title>

              <StyledRating
                readOnly
                name="customized-color"
                value={value}
                getLabelText={getLabelText}
                precision={0.2}
                icon={<GradeIcon fontSize="inherit" />}
              />
              <S.RatingValue>{value} out of 5</S.RatingValue>
              <S.ButtonsRow>
                <Tooltip title="Add a review!">
                  <Button
                    variant="outlined"
                    color="darkcyan"
                    onClick={handleOpen}
                  ><RateReviewIcon colorPrimary={"red"} />Review</Button>
                </Tooltip>
                <Tooltip title="Add a photo!">
                  <Button
                    variant="outlined"
                    color="grey"
                  ><AddAPhotoIcon /> </Button></Tooltip>
                <Tooltip title="Share this Location">
                  <Button
                    variant="outlined"
                    color="grey"
                  ><ShareIcon /></Button>
                </Tooltip>

              </S.ButtonsRow>
            </S.EffectiveContainer>
            <S.EffectiveContainer></S.EffectiveContainer>


          </S.EContainer>
        </Paper>

      </S.Container>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
      >


        <div style={modalStyle} className={classes.paper}>
          <StyledRating
            size="large"
            name="customized-color"
            value={value}
            getLabelText={getLabelText}
            precision={1}
            icon={<GradeIcon fontSize="inherit" />}
          />
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </>
  )
}

export default GeneralInfoCard
