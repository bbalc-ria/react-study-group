import styled from "styled-components";

export const Gallery = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  margin-top: 50px;
  cursor: pointer;
`;
export const Title = styled.div`
  display: block;
  text-align: center;
  margin-top: 25px;
  font-size: 3em;
  color: darkcyan;
  font-weight: bold;
  font-variant: small-caps;
  margin-bottom: 30px;
`;
export const Subtitle = styled.div`
  display: block;
  text-align: center;
  margin-top: 25px;
  font-size: 1.5em;
  color: darkcyan;
  opacity: 0.7;
  font-weight: bold;
  font-variant: small-caps;
  margin-bottom: 50px;
`;
export const FullGallery = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 70;
`;
export const Empty = styled.div`
  display: flex;
  flex-grow: 20;
`;
export const Container = styled.div`
  background: #f2f2f2;
  height: 100%;
`;
