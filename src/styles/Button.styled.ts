import styled from "styled-components";

type styledButtonType = {
  color: string;
  backgroundColor: string;
};

export const StyledButton = styled.div<styledButtonType>`
  width: 120px;
  font-size: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  &:hover {
    cursor: pointer;
    background-color: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
  }
`;
