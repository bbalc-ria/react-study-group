import React from "react";
import * as S from "./Styles";

function Button({
  active,  
  visible = true,
  text = "Click",
  onClick
}) {
  return (
    <S.SButton primary={active} visible={visible} onClick={onClick}>
      {text}
    </S.SButton>
  );
}

export default Button;
