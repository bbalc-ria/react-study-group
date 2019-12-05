import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BookShelvesList = styled.ul`
  padding: 10px;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
`;

export const BookShelfItemLink = styled(NavLink)`
  &:link, &:visited, &:active {
    text-decoration: none;
    color: "#00635d";
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  border: #d6d0c4 1px solid;
  width: 60%;
  margin: 0 5px;
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  color: ${props => (props.disabled ? "grey" : "black")};
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
