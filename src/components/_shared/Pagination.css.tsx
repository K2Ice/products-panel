import styled from "styled-components"

export const StyledRow = styled.div`
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.secondaryBg};
  font-size: 18px;
`
