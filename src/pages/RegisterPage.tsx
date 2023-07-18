import FormRegister from "../components/FormRegister"
import { StyledContainer, StyledTitle } from "./RegisterPage.css"

const RegisterPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>Rejestracja:</StyledTitle>
      <FormRegister />
    </StyledContainer>
  )
}

export default RegisterPage
