import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  background-color: #ebebeb;
  padding: 0 10%;
`;

export const BookImage = styled.img`
  height: auto;
  width: 150px;
  margin: 10px;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : "auto")};
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookTitle = styled.h2`
  margin: 4px 0px 4px 0px;
  padding: 0px 0px 2px 0px;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: bold;
  font-size: 24px;
`;

export const BookTitleLink = styled.h3`
  margin: 4px 4px 4px 0px;
  padding: 0px 0px 2px 0px;
  font-family: "Merriweather", "Georgia", serif;
  font-weight: 700;
  font-size: 16px;
  color: #515151;
`;

export const BookAuthor = styled.span`
  font-size: 16px;
  font-family: "Merriweather", "Georgia", serif;
`;

export const TextLink = styled.p`
  color: ${props => (props.disabled ? "grey" : "#00635d")};
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  font-size: 14px;
  font-family: "Merriweather", "Georgia", serif;
  margin-right: 5px;
  text-decoration: none;
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #515151;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallBookImage = styled(BookImage)`
  height: auto;
  width: 45px;
  margin: 5px;
`;

export const SmallBookTitle = styled(BookTitle)`
  font-size: 12px;
`;

export const SmallBookAuthor = styled(BookAuthor)`
  font-size: 12px;
`;

export const MidleBookImage = styled(BookImage)`
  height: auto;
  width: 80px;
  margin: 5px;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: #dcd6cc 1px solid;
  color: #333333;
  height: 26px;
  width: 97%;
  padding-left: 8px;
`;

export const Icon = styled.img`
  src = ${props => (props.src ? props.src : "")};
  width: 30px;
  height: 30px;
  title = ${props => props.title};
  cursor: pointer;
`;

export const ButtonIcon = styled.button`
  background-color: #ebebeb;
  border-radius: 3px;
  border: ${props =>
    props.selected ? "#dcd6cc 1px solid" : "#ebebeb 1px solid"};
  &:hover {
    border: #dcd6cc 1px solid;
  }
`;

export const RightAlignContainer = styled.div`
  margin-left: auto;
`;

export const InfoMessage = styled.span`
  color: grey;
  font-size: 16px;
`;

export const BookTable = styled.table`
  border-collapse: collapse;
  text-align: left;

  th {
    height: 70px;
  }

  th, td {
    border: solid 1px #dcd6cc;
    font-size: 16px;
    padding-left: 5px;
  }

  td {
    vertical-align: top;
  }
`;
