import styled from "styled-components";

export const BookShelvesList = styled.ul`
  padding: 10px;
  margin: 0;
  list-style-type: none;
  font-size: 12px;
`;

export const BookShelfItem = styled.li``;

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
