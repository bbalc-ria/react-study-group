import styled from "styled-components";

export const TopicsContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  width: 100px;
  height: 100px;
  border-style: solid;
  border-color: ${props => (props.active ? "#2779a7" : "transparent")};
  border-width: 1px;
  cursor: pointer;
  text-align: center;
  margin: 3px;
`;

export const TopicImage = styled.div`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  margin-top: auto;

`;

export const TopicLabel = styled.label`
box-sizing: border-box;
margin-bottom: auto;

  overflow-wrap: break-word;
`;
