import { FC } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../store/store"

import { ProductInterface } from "../types/products"

import Product from "../components/Product"
import PopupConfirm from "../components/_shared/PopupConfirm"

import { StyledContainer, StyledLink } from "./HomePage.css"
import {
  StyledTableProducts,
  StyledThTitle,
  StyledThPrice,
  StyledThAmount,
  StyledThActions,
  StyledTextNoProducts,
} from "./ProductPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"

const BasketPage: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser)
  const isOpen = useSelector((state: RootState) => state.popup.isOpen)

  return (
    <>
      {isOpen && <PopupConfirm type="basket" />}
      <StyledContainer>
        {loggedUser?.cart?.length ? (
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
              {loggedUser.cart!.map((product: ProductInterface) => (
                <Product type="basket" key={product.id} product={product} />
              ))}
            </tbody>
          </StyledTableProducts>
        ) : (
          <>
            <StyledTextNoProducts>
              Brak produktów w koszyku
            </StyledTextNoProducts>
            <StyledLink to="/products?page=1&way=asc&sort=title">
              Przejdź do listy produktów
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </StyledLink>
          </>
        )}
      </StyledContainer>
    </>
  )
}

export default BasketPage
