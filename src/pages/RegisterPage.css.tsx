import styled from "styled-components"

import { breakpoints } from "../styles/theme"

export const StyledContainer = styled.div`
  width: 70%;
  margin: 70px auto;

  @media ${breakpoints.xs} {
    width: 85%;
  }
`
export const StyledTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`
