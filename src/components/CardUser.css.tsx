import styled from "styled-components";

export const StyledBoxCard = styled.div`
  height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondaryBg};
  border: 1px solid ${({ theme }) => theme.primaryBg};
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledBoxImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;
