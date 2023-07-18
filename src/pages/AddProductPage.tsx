import FormAddProduct from "../components/FormAddProduct"
import { StyledContainer, StyledTitle } from "./AddProductPage.css"

const AddProductPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>Dodaj produkt</StyledTitle>
      <FormAddProduct />
    </StyledContainer>
  )
}

export default AddProductPage
