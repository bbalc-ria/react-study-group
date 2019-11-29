import styled from 'styled-components'
export const Image = styled.img`
max-width:15%;
/* padding:3px; */
height:auto;
margin:7px;
/* box-shadow: 0px 1px 2px rgba(223, 223, 223, 1); */
border:2px solid rgb(223.5, 223.5, 223.5);

margin-left:0px;
cursor: pointer;
transition: all .2s ease-in-out;  
:hover{
  transform: scale(1.3);
  z-index:2;
   };
`
