import styled from "styled-components";
import { theme } from "../Theme";
export const Container = styled.div`
  display: flex;
  margin: 5px;
  margin-top: 20px;
  padding: 2px 4px 4px 2px;
  background-color: rgba(0, 0, 0, 0.07);
  flex-direction: column;
  width: fit-content;
  position: relative;
  height: fit-content;
  align-items: center;
`;
export const Avatar = styled.img`
  margin-top: 7px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
export const AvatarContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const Author = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  height: fit-content;
  margin-bottom: 3px;
`;
export const DetailsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Date = styled.div`
  height: fit-content;
  margin-left: 10px;

  margin-right: 5px;
  font-size: 0.7rem;
`;
export const Content = styled.div`
  border-top: 3px solid whitesmoke;
  display: flex;
  margin-top: 10px;
  padding-top: 10px;
  word-wrap: break-word;
`;
export const GalleryContaier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BasicLine = styled.div`
  width: 100%;
`;
export const CommentContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentContaierBody = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid whitesmoke;
  margin-left: 10px;
  padding-left: 5px;
  margin-right: 30px;
  padding-left: 10px;
  padding-bottom: 5px;
`;
export const Badge = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: 2px;
  margin-top: 7px;
  background: darkcyan;
  border: 1px solid rgba(0, 84.7, 84.7, 0.1);
  justify-content: center;
  color: ${props => (props.count > 700 ? "white" : "black")};
  color: ${props => (props.count >= 1000 ? "gold" : "")};
`;
export const Feedback = styled.div`
  margin-right: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: flex-end;
  z-index: 100;
`;
export const FeedbackButtons = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: 25px;
  display: flex;
  color: grey;
  cursor: pointer;
  :hover {
    color: darkred;
  }
`;

export const TagList = styled.div`
  width: 100%;
  margin: 20px 10px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;
export const Tag = styled.div`
  margin: 3px;
  padding: 2px;
  background: rgba(0, 0, 0, 0.05);
  :hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
export const ShowPhotos = styled.div`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
