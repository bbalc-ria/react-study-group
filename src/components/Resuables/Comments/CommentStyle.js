import styled from 'styled-components'
export const Container = styled.div`
display:flex;
margin:5px;
background-color:rgba(0,0,0,0.02);
flex-direction:column;
width:fit-content;
align-items:center;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
`
export const Avatar = styled.img`
margin-top:7px;
border-radius:50%;
width:60px;
height:60px;
`
export const AvatarContainer = styled.div`
flex-direction:column;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
`
export const Author = styled.div`
align-items:center;
display:flex;
flex-direction:column;
margin-left:5px;
height:fit-content;

`
export const Details = styled.div`
display:flex;
width:100%;
justify-content:space-between;

height:fit-content;
margin-bottom:3px;
`
export const DetailsContainer = styled.div`
margin-top:5px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

`
export const Date = styled.div`
height:fit-content;
margin-right:5px;
`
export const Content = styled.div`
border-top:3px solid whitesmoke;
display:flex;
margin-top:10px;
/* padding-left:10px; */
word-wrap:break-word;

`
export const GalleryContaier = styled.div`
border-top:3px solid whitesmoke;
padding-left:10px;
`
export const CommentContainer = styled.div`
flex-direction:row;
display:flex;
align-items:center;
justify-content:center;;

width:100%;
`

export const CommentContaierBody = styled.div`
display:flex;
flex-direction:column; 
border-left:3px solid whitesmoke;
margin-left:5px;
padding-left:5px;
padding-bottom:5px;
`
export const Badge = styled.div`
display:flex;
padding:5px;
align-items:center;
justify-content:center;
background-color:rgba(0,84.7,84.7,${props => props.count * 0.001});
color:${props => props.count > 700 ? "white" : "black"};
color:${props => props.count >= 1000 ? "gold" : ""};
border-radius:50%;


`