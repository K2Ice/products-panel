import styled from "styled-components"
import { maxWidthContainer } from "../styles/theme"
import { Link } from "react-router-dom"

export const StyledContainer = styled.div`
  max-width: ${maxWidthContainer};
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

export const StyledTitle = styled.h1`
  font-size: 52px;
  padding: 10px;
  text-align: center;
`

export const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  font-size: 20px;
`
export const StyledBoxImage = styled.div`
  width: 90%;
  max-height: 400px;
  overflow: hidden;
`
