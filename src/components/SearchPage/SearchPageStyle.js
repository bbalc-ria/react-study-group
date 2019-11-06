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
margin:5px;
border:1px red solid;
margin-right:16px;
width:100%;
padding:3px;


`
export const Map = styled.div`
margin-right:16px;
margin-top:16px;
display:block;
flex-grow:50;
min-height:300px;
/* height:50vh; */
/* align-self:flex-end; */
/* overflow:hidden; */
position:relative!important;
`