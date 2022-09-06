import styled from "styled-components";

type HeaderType = {
  backgroundColor: string;
};

export const StyledHeader = styled.header`
  text-align: center;
  //Exempel på props
  color: ${(props) => props.color};
  //Exempel på destructured props (Måste ha en typ?)
  background-color: ${({ backgroundColor }: HeaderType) => backgroundColor};
  &:hover {
    cursor: pointer;
    background-color: silver;
  }
`;
