import React from 'react';
import * as S from './SearchPageStyle';
import { ReactComponent as PinSvg } from '../../resources//pin.svg';
import { ReactComponent as HomeSvg } from '../../resources//HomeAv2.svg';
import { ReactComponent as SelectedSvg } from '../../resources//selected.svg';
export default function Marker(props) {

  return (
    <S.Marker>
      {
        !props.selected && (
          props.home === true ? (<HomeSvg height="100px" width="80px"></HomeSvg>)
            : (<PinSvg height="15px" width="15px"></PinSvg>))
      }
      {props.selected === true && <SelectedSvg height="25px" width="25px"></SelectedSvg>}


    </S.Marker>
  )
}
