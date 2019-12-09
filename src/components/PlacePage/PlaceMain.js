import React, { useEffect, useState } from "react";
import * as S from "./PlaceStyles";
import { useHistory } from "react-router-dom";
import GeneralInfoCard from "./Cards/GeneralInfoCard";
import { Paper } from "@material-ui/core";
import Hours from "./Cards/Hours";
import DishCard from "../Resuables/DishCard/DishCard";
import { navigate } from "@reach/router";
import { PlaceService } from "../../services/PlaceService";
import { ImageService } from "../../services/ImageService";



function PlaceMain(props) {
  const [place, setplace] = useState();
  const [galleryPreview, setgalleryPreview] = useState()
  debugger;
  useEffect(() => {
    debugger;
    console.log("INEFFECT")
    setplace(PlaceService.getPlace(props.placeId))
    setgalleryPreview(ImageService.getPreviewImages(props.placeId))
    debugger;
    console.log("PLACE", place)
  }, [])
  let goToGallery = () => {
    navigate("/gallery");
  };


  return (
    <S.Container>
      <Paper square elevation={4}>
        {galleryPreview && <S.Gallery onClick={goToGallery}>
          {galleryPreview.map(x =>
            <img src={x} width="auto" height="300px"></img>
          )}

        </S.Gallery>}
      </Paper>
      <S.Cards>
        <S.Column1>
          {place && <GeneralInfoCard place={place}></GeneralInfoCard>}

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
