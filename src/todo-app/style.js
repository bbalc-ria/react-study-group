import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.h3``;

export const ListGroup = styled.ul``;

export const ListGroupItem = styled.li``;

export const Label = styled.label``;

export const Input = styled.input``;

export const CheckboxWrapper = styled.div``;

export const Row = styled.div``;

export const FormControl = styled.input``;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background: ${props => (props.disabled ? "grey" : "blue")};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
`;
