import styled from 'styled-components'




export const Container = styled.div`
margin-top:100px;
display:flex ;
/* align-items:center; */
/* justify-content:center; */
`
export const List = styled.ul`
display:flex;
flex-direction:column;
flex-grow: 50;
align-items:center;
justify-content:center;
`
export const ListItem = styled.li`
list-style-type: none;
cursor: pointer;
display:flex;
width:80%;
margin:10px;
border:1px rgba(0,0,0,0.1) solid;
margin-right:16px;
padding:7px;
background: ${props => props.selected ? 'grey' : "white"};

`
export const Marker = styled.div`
position:absolute;
top: 100%;
left: 50%;
transform: translate(-50%, -50%)

`
export const Map = styled.div`
margin-right:16px;
height: '80vh';
max-height:500px;
width: '100%';
margin-top:16px;
display:block;
flex-grow:50;
position: -webkit-sticky; /* Safari & IE */
position: sticky !important;
top: 20px;
min-height:300px;
`
export const Rating = styled.div`
float:right;
align-self:right;
`