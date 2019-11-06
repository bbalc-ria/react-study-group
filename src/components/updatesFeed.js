import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as S from "../styles";

function UpdatesFeed(props) {
  return (
    <S.ColumnFlex>
      Updates feed
      <Link to="/book/detail/25883848">The Hating Game</Link>
      <Link to="/book/detail/34441271">Tell Me (Me, #1)</Link>
      <Link to="/book/detail/43319680">Tarnished Are the Stars</Link>
    </S.ColumnFlex>
  );
}

export default withRouter(UpdatesFeed);
