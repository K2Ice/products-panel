import { FC } from "react"

import FormRegister from "../components/FormRegister"

import { StyledContainer, StyledTitle } from "./RegisterPage.css"

const RegisterPage: FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>Rejestracja:</StyledTitle>
      <FormRegister />
    </StyledContainer>
  )
}

export default RegisterPage
