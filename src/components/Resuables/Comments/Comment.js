import React, { useState } from 'react'
import * as S from './CommentStyle';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Rating from '@material-ui/lab/Rating';
import GradeIcon from '@material-ui/icons/Grade';
import { withStyles } from '@material-ui/core/styles';
import EditableImagePreviewer from '../EditableImagePreviewer/ImagePreviewer';
import ImagePreviewer from '../ImagePreviewer/ImagePreviewer';
import Gallery from 'react-grid-gallery';


const StyledRating = withStyles({
  iconFilled: {
    color: '#005858 ',
  },
  iconHover: {
    color: '#005858 ',
  },
  width: "fitContet",
})(Rating);

const imagesPlaceholder = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/F25yrKgW3p5TFLoZ8FYUKw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/mD6Jws_iBBds2uRxefv1Fg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/9LihxkSH3zdAqtGCkn2VDQ/o.jpg",
]
function Comment(props) {
  const [date, setdate] = useState(new Date());

  let images = imagesPlaceholder.map(x => { return { src: x, thumbnail: x, thumbnailWidth: (Math.random() + 0.5) * 400, thumbnailHeight: 300 } });

  return (

    <S.Container>
      <S.CommentContainer>

        <S.AvatarContainer>
          <S.Avatar src="https://picsum.photos/id/272/200/200" />
          <S.Author>
            Istvan Borwinmingerr
          <S.Badge count={1001}>
              20022
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
                {console.log(date)}
                {date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}
              </S.Date>

            </S.Details>


          </S.DetailsContainer>

          <S.Content>


            This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!
        </S.Content>

        </S.CommentContaierBody>
      </S.CommentContainer>
      <S.GalleryContaier>
        {/* {pictures.map((image, i) => <ImagePreviewer image={image} id={i}></ImagePreviewer>)} */}
        <Gallery images={images} enableImageSelection={false} />

      </S.GalleryContaier>

    </S.Container>

  )
}

export default Comment
