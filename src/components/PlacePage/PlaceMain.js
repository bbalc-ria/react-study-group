import React from "react";
import * as S from "./PlaceStyles";
import { useHistory } from "react-router-dom";
import GeneralInfoCard from "./Cards/GeneralInfoCard";
import { Paper } from "@material-ui/core";
import Hours from "./Cards/Hours";
import DishCard from "../Resuables/DishCard/DishCard";
import { navigate } from "@reach/router";

const imagesPlaceholder = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/F25yrKgW3p5TFLoZ8FYUKw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/mD6Jws_iBBds2uRxefv1Fg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/9LihxkSH3zdAqtGCkn2VDQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/6vehCn5qoCLGS2Hce-5BUA/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/UCi_RbxYJGN4jyFQuxUroQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/hCnQf92Z_4hXopIx6LTNZQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/wA7oxCzcMljVgURAVXKsvw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/Jfjh22ZMDgY4tz9OeZBj3w/o.jpg"
];

function PlaceMain(props) {
  let goToGallery = () => {
    navigate("gallery");
  };
  return (
    <S.Container>
      <Paper square elevation={4}>
        <S.Gallery onClick={goToGallery}>
          <img src={imagesPlaceholder[0]} width="24.5%" height="300px"></img>
          <img src={imagesPlaceholder[1]} width="24.5%" height="300px"></img>
          <img src={imagesPlaceholder[2]} width="24.5%" height="300px"></img>
          <img src={imagesPlaceholder[5]} width="24.5%" height="300px"></img>
        </S.Gallery>
      </Paper>
      <S.Cards>
        <S.Column1>
          <GeneralInfoCard></GeneralInfoCard>
          <Hours></Hours>
        </S.Column1>

        <S.Column2>
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
        </S.Column2>
      </S.Cards>
    </S.Container>
  );
}

export default PlaceMain;
