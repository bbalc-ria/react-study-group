import React from "react";
import * as S from "./styles";
import { resources } from "../utils/Resources";

const Filters = props => {
  return (
    <S.ListGroupItem>
      <S.LinkContainer>
        <S.Link onClick={props.onAllFilter}>{resources.allCaption}</S.Link>
        <S.Link onClick={props.onActiveFilter}>{resources.activeCaption}</S.Link>
        <S.Link onClick={props.onCompletedFilter}>{resources.completedCaption}</S.Link>
      </S.LinkContainer>
    </S.ListGroupItem>
  );
};

export default Filters;
