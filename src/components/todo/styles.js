import styled from 'styled-components';

export const Input = styled.input`
/* font-size:2em; */
padding: 12px 20px;
border:none;
float:right;
width:80%;
margin-right:3px;
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
width: 1.3em;
height: 1.3em;
background-color: white;
border-radius: 50%;
vertical-align: middle;
border: 1px solid #ddd;
-webkit-appearance: none;
outline: none;
cursor: pointer;
background: ${props => props.checked ? 'salmon' : 'papayawhip'};
`
export const Li = styled.li`
width:90%;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin-top: 3px;
padding-left: 10px;
${props => props.completed && `opacity: 0.3 ;
text-decoration: line-through`}
`

export const ToDoListElement = styled.ul`
list-style-type: none;
min-width:50px;
width:70%;
margin-left: 2%;`


export const Button = styled.button`
  margin: 1%;
`
export const Title = styled.h1`
  text-align: center;
`;

export const SelectAllButton = styled.div`
width: 1rem;
height: 1rem;
border-radius: 50%;
border: 1px solid #ddd;
outline: none;
cursor: pointer;
background: ${props => props.checked ? 'salmon' : 'papayawhip'};
margin-right:10px;  
`
export const FullBody = styled.div`

flex-grow: 2;
flex-wrap:wrap;
min-width:200px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: rgba(109, 130, 143, 0.1);
@media  (max-width: 800px) {
    display:flex;
    background:grey;
  }`


export const InputWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
/* min-width:80px; */
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
   /* flex-grow:0; */
  }
`
export const All = styled.div`
display:flex 1;
flex-direction:row;
align-items: center;
height:100%;
@media (max-width: 600px) {
    /* flex:1; */
    background:red;
  }
`