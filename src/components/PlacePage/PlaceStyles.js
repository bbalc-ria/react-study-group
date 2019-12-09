import styled from "styled-components";

export const Gallery = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
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
export const Cards = styled.div`
  margin-top: 2%;
  display: flex;
  flex: 1;
  flex-grow: 100;
  flex-wrap: wrap;

  /* flex-direction: column; */
`;
export const Column1 = styled.div`
  display: flex;
  margin: 0% 3%;
  min-width: 800px;
  flex: 1;
  flex-direction: column;
  flex-grow: 40;
`;
export const Column2 = styled.div`
  min-width: 400px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
  flex-grow: 15;
`;
