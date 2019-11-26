import React from 'react'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import * as S from './PlaceStyles'

const imagesPlaceholder = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/F25yrKgW3p5TFLoZ8FYUKw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/mD6Jws_iBBds2uRxefv1Fg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/9LihxkSH3zdAqtGCkn2VDQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/6vehCn5qoCLGS2Hce-5BUA/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/UCi_RbxYJGN4jyFQuxUroQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/hCnQf92Z_4hXopIx6LTNZQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/wA7oxCzcMljVgURAVXKsvw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/Jfjh22ZMDgY4tz9OeZBj3w/o.jpg"]
function ImageGallery() {

  let images = imagesPlaceholder.map(x => { return { src: x, thumbnail: x, thumbnailWidth: (Math.random() + 0.5) * 400, thumbnailHeight: 300, caption: "This is a placeholder captions" } })
  let images2 = imagesPlaceholder.map(x => { return { src: x, thumbnail: x, thumbnailWidth: (Math.random() + 0.5) * 400, thumbnailHeight: 300 } });
  images = [...images, ...images2];
  return (
    <>
      <S.Title>Placeholder Place name </S.Title>
      <S.Subtitle>Gallery</S.Subtitle>
      <S.FullGallery>
        <Gallery images={images} enableImageSelection={false} />
      </S.FullGallery>


    </>
  )
}
export default ImageGallery
