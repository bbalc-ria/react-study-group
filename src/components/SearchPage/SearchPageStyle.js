import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 70;
  align-items: center;
  justify-content: center;
`;
export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  width: 80%;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  margin-right: 5px;
  padding: 7px;
  display: flex;
  background: ${props => (props.selected ? "SeaShell" : "Snow")};
`;
export const Marker = styled.div`
  position: relative;
  cursor: pointer;
  top: 100%;
  left: 50%;
  transform: translate(-80%, -80%);
  z-index: ${props => (props.selected === true ? 999 : 9)};
`;
export const Map = styled.div`
  margin-right: 16px;
  height: "80vh";
  max-height: 500px;
  width: "100%";
  margin-top: 16px;
  display: block;
  flex-grow: 30;
  position: sticky !important;
  top: 20px;
  justify-content: space-between;
  min-height: 300px;
`;
export const Rating = styled.div`
  align-self: left;
`;
export const T = styled.div`
  flex-grow: 90;
`;
export const AdditionalInfoContainer = styled.div`
  flex-grow: 10;
  flex-direction: collumn;
`;
export const label = styled.div`
  background: snow;
  font-size: 20px;
  position: absolute;
  z-index: 10;
`;
