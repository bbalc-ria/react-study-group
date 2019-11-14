import React from "react";
import * as S from "./TopicsStyles";

function TopicTable({ topics = [], onSelect }) {
  return (
    <S.TopicsContainer>
      {topics.map((v, i) => {
        return (
          <S.Topic onClick={() => onSelect(v.topic)} key={i} active={v.active}>
            <S.TopicImage dangerouslySetInnerHTML={{__html: v.icon}}></S.TopicImage>
            <S.TopicLabel>{v.topic}</S.TopicLabel> 
          </S.Topic>
        );
      })}
    </S.TopicsContainer>
  );
}

export default TopicTable;

