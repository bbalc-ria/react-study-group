import styled from "styled-components";
import { RowFlex } from "../../styles";

export const BookDetailContainer = styled(RowFlex)`
  padding: 10px;
  width: 50%;
`;

export const BookDescription = styled.span`
  font-size: 14px;
  font-family: "Merriweather", "Georgia", serif;
  margin-top: 10px;
  text-align: justify;
  height: ${props => (props.showMoreDescription ? "auto" : "200px")};
  overflow: ${props => (props.showMoreDescription ? "visible" : "hidden")};
`;
