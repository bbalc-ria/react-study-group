import styled from "styled-components";
import deleteSvg from "../resources/delete.svg";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

export const Wrapper = styled.section`
  padding: 0.1em;
  background: #2779a7;
`;

export const SButton = styled.button`
  background: ${props => (props.primary ? "#2779A7" : "white")};
  color: ${props => (props.primary ? "white" : "#2779A7")};
  opacity: ${props => (props.visible === false ? 0 : 1)};
  font-size: 1.2em;
  margin: 0.2em;
  padding: 0.25em 0.2em;
  border: 2px solid #2779a7;
  border-radius: 3px;
  min-width: 3em;
  outline: none;
  cursor: pointer;
`;

export const Label = styled.label`
  width: inherit;
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1.2em;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
`;

export const Ul = styled.ul`
  overflow: auto
  list-style-type: none;
  background: yellow;
  padding: 0;
  margin: auto;
`;

export const ToDoItemDeleteButton = styled.button`
  background-image: url(${deleteSvg});
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  opacity: 0;
  background-repeat: no-repeat;
`;

export const Li = styled.li`
  overflow: auto;
  align-content: center;
  padding: 0px;
  padding: 0.55rem 1.25rem;
  background-color: #fff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: center;

  :hover ${ToDoItemDeleteButton} {
    opacity: 1;
  }
`;

export const ToDoItemCheckbox = styled.input`
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const ToDoItemLabel = styled.label`
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0px;
  font-size: 24px;
`;

export const ListContainer = styled.div`
  position: relative;
  top: 140px;
`;

export const FilterContainer = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  text-align: center;
  margin: auto;
  overflow: auto;
`;

export const ClearCompletedContainer = styled.div`
  float: right;
`;

export const ItemsLeftLabel = styled(Label)`
  float: left;
  border: 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Header = styled.div`
  background: #ffffff;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 1;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: inline;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  padding: 10px;
  background: #ffffff;
  z-index: 1;
`;
