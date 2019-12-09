import styled from "styled-components";
import { theme } from "../../Resuables/Theme";
export const Title = styled.div`
  display: block;
  width: fit-content;
  font-size: 40px;
  color: 0, 51, 20;
  font-variant: small-caps;
`;
export const Container = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export const RatingValue = styled.div`
  font-weight: bolder;
  margin-bottom: 5px;
`;
export const EffectiveContainerBeggining = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
`;
export const EffectiveContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
`;

export const ButtonsRow = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
export const ReferenceButton = styled.div``;
export const Line = styled.div`
  padding: 40px 40px;
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    color: ${props =>
      props.color === "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main};
  }
`;

export const OpenStatus = styled.div`
  cursor: default;
  padding: 5px 11px;
  font-size: 18px;
  margin: 5px 5px 10px 30px;
  min-width: 100px;
  color: white;
  border-radius: 3px;
  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
  width: fit-content;
  background: ${props =>
    props.closed
      ? theme.palette.secondary["A400"]
      : theme.palette.primary[500]};
`;
export const Table = styled.div`
  /* width: 80%; */
  /* margin-left: 10%; */
  font-size: 20px;
  padding-bottom: 20px;
`;
export const Subtitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  text-decoration: underline;
`;
export const SpecialList = styled.ul``;
export const SpecialLi = styled.div`
  margin: 10px;
  font-size: 1em;
  color: ${theme.palette.primary[500]};
  font-weight: 500;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  margin: 40px;
`;

export const Reviews = styled.div`
  flex: 1;
  flex-direction: column;
`;
