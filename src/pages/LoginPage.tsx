import { FC } from "react"

import FormLogin from "../components/FormLogin"

import { StyledContainer, StyledTitle } from "./LoginPage.css"

const LoginPage: FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>Logowanie:</StyledTitle>
      <FormLogin />
    </StyledContainer>
  )
}

export default LoginPage
