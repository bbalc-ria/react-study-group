import styled from "styled-components";

export const BookDetailContainer = styled.div`
  padding: 10px;
  width: 540px;
`;

export const BookDescription = styled.span`
  font-size: 14px;
  font-family: "Merriweather", "Georgia", serif;
  margin-top: 10px;
  text-align: justify;
  height: ${props => (props.showMoreDescription ? "auto" : "200px")};
  overflow: ${props => (props.showMoreDescription ? "visible" : "hidden")};
`;
