import styled from 'styled-components';

export const Input = styled.input`
/* font-size:2em; */
padding: 22px 22px;
line-height:20x;
border:none;
font-size:3em;
float:right;
width:70%;
margin-right:3px;
box-shadow:inset 0 -1px 3px rgba(0,0,0,0.3);
&::placeholder{   
    opacity:0.2;
    box-sizing: border-box;
}

&:focus{
  outline:none;
}
`
export const DeleteImage = styled.img`
float:right;
height:15px;
width:15px;
opacity: ${props => props.hovered ? 1 : 0};
:hover{
  cursor: pointer;
}
`


export const CheckBox = styled.input`
height: 2em;
width:2em;
padding-top:10px;
background-color: white;
border-radius: 50%;
vertical-align: middle;
border: 1px solid #ddd;
-webkit-appearance: none;
outline: none;
cursor: pointer;
background: ${props => props.checked ? 'silver' : 'snow'};
`
export const Li = styled.li`
width:90%;
font-size:2em;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin-top: 3px;
padding-left: 10px;
${props => props.completed && `opacity: 0.3 ;
text-decoration: line-through`}
`

export const ToDoListElement = styled.ul`
list-style-type: none;

box-shadow:inset 0 -1px 3px rgba(0,0,0,0.4);

min-width:50px;
width:70%;
margin-left: 2%;`


export const Button = styled.div`
  margin: 3%;
  cursor: pointer;
  padding:5px;
  ${props => props.selected && `
  border: 2px inset rgba(122,22,1,0.2);`}
`
export const Title = styled.div`
  color:indianred;
  opacity:0.4;
  font-size:8em;
  text-align: center;
`;
export const LeftCounter = styled.div`
  display:block;
  width:fit-content;
  float:left;

`

export const SelectAllButton = styled.div`
width: 2rem;
height: 2rem;
border-radius: 50%;
border: 1px solid #ddd;
outline: none;
cursor: pointer;
background: ${props => props.checked ? 'silver' : 'snow'};
margin-right:10px;  
`
export const FullBody = styled.div`

flex-grow: 2;
flex-wrap:wrap;
min-width:200px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media  (max-width: 800px) {
    display:flex;
    background:grey;
  }`


export const InputWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
export const Footer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
`
export const CenteredContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
export const Filler = styled.div`
  flex-grow:2;
  @media  (max-width: 800px) {
   display:none;
  }
`
export const All = styled.div`
display:flex 1;
flex-direction:row;
align-items: center;
height:100%;
@media (max-width: 600px) {
    background:red;
  }
`