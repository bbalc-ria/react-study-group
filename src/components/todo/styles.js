import styled from 'styled-components';

export const Input = styled.input`
&:placeholder{   
    font-size: 3em;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 0px;
    border-radius: 4px;
    box-sizing: border-box;
}
`
export const Element = styled.div`
width: 1.3em;
height: 1.3em;
background-color: white;
border-radius: 50%;
vertical-align: middle;
border: 1px solid #ddd;
-webkit-appearance: none;
outline: none;
cursor: pointer;
`
export const Li = styled.li
  ` border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin-top: 3px;
padding-left: 10px;
${props => props.completed && `opacity: 0.3; background-color: gray;
text-decoration: line-through`}
`

export const ToDoListElement = styled.ul`
float: left;
padding-top: 0vh;
list-style-type: none;
margin: 0;
padding: 0;
width: 500px;
margin-left: 10px;
`
export const Button = styled.button`
  margin: 5px;
`
// export const Input = styled.input`
//     float: left;
//     border-bottom: 2px solid rgba($color: #000000, $alpha: 0.2);
//     width: $base-width;
//   `




export const Title = styled.h1`
  text-align: center;
`;

export const SelectAllButton = styled.button`
float: left;
opacity: 1;
font-size: 3em;
`
export const FullBody = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
background: rgba(109, 130, 143, 0.1)`