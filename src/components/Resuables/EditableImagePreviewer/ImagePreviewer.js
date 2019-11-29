import React from "react";
import * as S from "./ImagePreviewrStyle";

export default function EditableImagePreviewer(props) {
  return (
    <>
      {console.log(props.image, "imagePreviewr;")}
      <S.Image
        src={props.image}
        onClick={() => props.deleteImage(props.id)}
      ></S.Image>
    </>
  );
}
