import styled from "styled-components";

export const TopicsContainer = styled.div`
  grid-row-start: 3;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-content: left;
  margin: auto;
  overflow: auto;
`;

export const Topic = styled.div`
  /*float: left;*/
  /*margin: auto;*/
  margin: 20px;
  padding: 3px;
  width: auto;
  max-width: 100px;
  height: auto;
  border-style: solid;
  border-color: ${props => (props.active ? "#2779a7" : "transparent")};
  border-width: 1px;
  cursor: pointer;
  text-align: center;
`;

export const TopicImage = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const TopicLabel = styled.label`
  position: relative;
  width: auto;
  overflow-wrap: break-word;
`;