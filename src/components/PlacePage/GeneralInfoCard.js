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
import AddReview from './AddReview';

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


function GeneralInfoCard() {

  const [value, setValue] = React.useState(2.6);
  const [openModal, setOpenModal] = React.useState(false);

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
                    onClick={handleOpen}
                  ><RateReviewIcon />Review</Button>
                </Tooltip>
                <Tooltip title="Add a photo!">
                  <Button
                    variant="outlined"
                  ><AddAPhotoIcon /> </Button></Tooltip>
                <Tooltip title="Share this Location">
                  <Button
                    variant="outlined"
                  ><ShareIcon /></Button>
                </Tooltip>

              </S.ButtonsRow>
            </S.EffectiveContainer>
            <S.EffectiveContainer></S.EffectiveContainer>


          </S.EContainer>
        </Paper>

      </S.Container>
      <AddReview open={openModal} handleClose={handleClose} />
    </>
  )
}

export default GeneralInfoCard
