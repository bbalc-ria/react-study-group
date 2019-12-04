import styled from "styled-components";

export const TopBarContainer = styled.div`
  padding: 5px;
  margin: 15px 0;
  width: 100%;
  
  display:flex;
  flex-flow:row-wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #DDDDDD;
  border-radius: 10px;
`;

export const Logo = styled.img`
  height: 90px;
  width: auto;
  padding-right: 20px;
  src: url(${props => props.src})
`;

export const Guest = styled.img`
  height: 64px;
  width: auto;
  padding: 0 20px;
  src: url(${props => props.src})
`;

export const MenuBarContainer = styled.div`
  padding-right: 20px;
  display: flex;
`;

export const MenuItem = styled.div`
  padding: 0 5px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  width: ${props => (props.width ? props.width : "auto")};
  color: #515151;

  &:hover {
    background-color: #BBBBBB;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }
`;

export const UserProfileContainer = styled.div`
  margin-left: auto;
`;