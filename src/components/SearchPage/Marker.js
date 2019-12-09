import React, { useState } from "react";
import * as S from "./SearchPageStyle";
import { ReactComponent as PinSvg } from "../../resources//pin.svg";
import { ReactComponent as HomeSvg } from "../../resources//Homesvg.svg";
export default function Marker(props) {
  const [show, setShow] = useState(false);
  let enter = () => {
    setShow(!show);
  };
  let leave = () => {
    if (show == true) {
      let timeout = 1000;
      setTimeout(() => {
        setShow(false);
      }, timeout);
    }
  };

  return (
    <S.Marker onClick={enter} onMouseLeave={leave} selected={props.selected}>
      {show && <S.label>{props.label}</S.label>}
      {!props.selected &&
        (props.home === true ? (
          <HomeSvg fill="darkcyan" height="50px" width="44px"></HomeSvg>
        ) : (
          <PinSvg fill="darkcyan" height="30px" width="25px"></PinSvg>
        ))}
      {props.selected === true && (
        <PinSvg fill="darkred" height="40px" width="35px"></PinSvg>
      )}
    </S.Marker>
  );
}
