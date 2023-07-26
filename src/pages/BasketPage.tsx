import { FC } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../store/store"

import { ProductInterface } from "../types/products"

import Product from "../components/Product"
import PopupConfirm from "../components/_shared/PopupConfirm"

import { StyledContainer } from "./HomePage.css"
import {
  StyledTableProducts,
  StyledThTitle,
  StyledThPrice,
  StyledThAmount,
  StyledThActions,
  StyledTextNoProducts,
} from "./ProductPage.css"

const BasketPage: FC = () => {
  const loggedUserCart = useSelector(
    (state: RootState) => state.user.loggedUserCart
  )
  const isOpen = useSelector((state: RootState) => state.popup.isOpen)

  return (
    <>
      {isOpen && <PopupConfirm type="basket" />}
      <StyledContainer>
        {loggedUserCart.length ? (
          <StyledTableProducts>
            <thead>
              <tr>
                <StyledThTitle>Tytuł</StyledThTitle>
                <StyledThPrice>Cena</StyledThPrice>
                <StyledThAmount>Ilość</StyledThAmount>
                <StyledThActions>Usuń</StyledThActions>
              </tr>
            </thead>
            <tbody>
              {loggedUserCart.map((product: ProductInterface) => (
                <Product type="basket" key={product.id} product={product} />
              ))}
            </tbody>
          </StyledTableProducts>
        ) : (
          <StyledTextNoProducts>Brak produktów w koszyku</StyledTextNoProducts>
        )}
      </StyledContainer>
    </>
  )
}

export default BasketPage
