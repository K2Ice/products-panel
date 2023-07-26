import { FC } from "react"

import FormAddProduct from "../components/FormAddProduct"

import { StyledContainer, StyledTitle } from "./AddProductPage.css"

const AddProductPage: FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>Dodaj produkt</StyledTitle>
      <FormAddProduct />
    </StyledContainer>
  )
}

export default AddProductPage
