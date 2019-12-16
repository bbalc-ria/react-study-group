import React from "react";
import * as S from "./ImagePreviewrStyle";

export default function EditableImagePreviewer(props) {
  console.log(props.image.id);
  return (
    <>
      <S.Image
        src={props.image.src}
        onClick={() => props.deleteImage(props.image.id)}
      ></S.Image>
    </>
  );
}
