import styled from "styled-components";
import TodoList from "./TodoList";

export const Container = styled(TodoList)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export const Title = styled.h3``;

export const ListGroup = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListGroupItem = styled.li`
  border: solid 1px #ccc;
  width: 300px;
  padding: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const CheckboxWrapper = styled.div`
  margin-left: 20px;
`;

export const Row = styled.div`
  display: flex;
`;

export const FormControl = styled.input`
  height: 40px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 4px;
  padding: 5px;
`;

export const Button = styled.div`
  width: 90px;
  height: 40px;
  background: ${props => (props.disabled ? "#3283a8" : "#42b0e3")};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  margin-left: 13px;
  color: white;
`;

export const ButtonLarge = styled(Button)`
  width: 200px;
  background: red;
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const Link = styled.div`
  background: white;
  width: auto;
  margin-left: auto;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    border-color: grey;
  }
`;
