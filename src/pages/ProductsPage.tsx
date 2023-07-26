import React, { useState, useEffect, FC } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import _ from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

import { RootState } from "../store/store"

import { ProductInterface, Status } from "../types/products"
import { Role } from "../types/user"

import PopupConfirm from "../components/_shared/PopupConfirm"
import Pagination from "../components/_shared/Pagination"
import Product from "../components/Product"

import {
  StyledBtnArrow,
  StyledContainer,
  StyledTableProducts,
  StyledThActions,
  StyledThAmount,
  StyledThPrice,
  StyledThStatus,
  StyledThTitle,
} from "./ProductPage.css"

const ProductsPage: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const productsList = useSelector((state: RootState) => state.products.list)
  const isOpen = useSelector((state: RootState) => state.popup.isOpen)
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser)

  const params = new URLSearchParams(location.search)
  const pageParam = params.get("page")
  const sortParam = params.get("sort")
  const wayParam = params.get("way") ? String(params.get("way")) : ""

  const [productsToDisplay, setProductsToDisplay] =
    useState<ProductInterface[]>()

  const updateSortParams = (value: string) => {
    if (sortParam === value) {
      params.set("way", wayParam === "asc" ? "desc" : "asc")
    } else {
      params.set("way", "asc")
    }
    params.set("sort", value)
    navigate(`${location.pathname}?${params.toString()}`)
  }
  useEffect(() => {
    const pagesAmount =
      productsList.length > 5 ? Math.ceil(productsList.length / 5) : 1
    if (Number(pageParam) > pagesAmount) {
      navigate(`/products?page=${pagesAmount}`)
    }
  }, [productsList])

  useEffect(() => {
    let result: ProductInterface[] = productsList

    if (sortParam) {
      const way = wayParam === "asc" ? "asc" : "desc"
      result = _.orderBy(result, [String(sortParam)], way)
    }

    setProductsToDisplay(
      result.slice((Number(pageParam) - 1) * 5, Number(pageParam) * 5)
    )
  }, [sortParam, wayParam, pageParam, productsList])

  return (
    <>
      {isOpen && <PopupConfirm type="page" />}
      <StyledContainer>
        <StyledTableProducts>
          <thead>
            <tr>
              <StyledThTitle>
                Tytuł
                <StyledBtnArrow
                  color={sortParam === "title" ? "#000" : "#888"}
                  wayUp={sortParam === "title" && wayParam === "asc"}
                  onClick={() => updateSortParams("title")}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </StyledBtnArrow>
              </StyledThTitle>
              <StyledThPrice>
                Cena
                <StyledBtnArrow
                  color={sortParam === "price" ? "#000" : "#888"}
                  wayUp={sortParam === "price" && wayParam === "asc"}
                  onClick={() => updateSortParams("price")}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </StyledBtnArrow>
              </StyledThPrice>
              <StyledThAmount>
                Ilość
                <StyledBtnArrow
                  color={sortParam === "amount" ? "#000" : "#888"}
                  wayUp={sortParam === "amount" && wayParam === "asc"}
                  onClick={() => updateSortParams("amount")}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </StyledBtnArrow>
              </StyledThAmount>
              {loggedUser?.role !== Role.Client && (
                <StyledThStatus>
                  Status
                  <StyledBtnArrow
                    color={sortParam === "status" ? "#000" : "#888"}
                    wayUp={sortParam === "status" && wayParam === "asc"}
                    onClick={() => updateSortParams("status")}
                  >
                    <FontAwesomeIcon icon={faArrowDown} />
                  </StyledBtnArrow>
                </StyledThStatus>
              )}

              <StyledThActions>
                {loggedUser?.role === Role.Admin
                  ? "Edytuj / Usuń"
                  : loggedUser?.role === Role.Employee
                  ? "Edytuj"
                  : "Dodaj do koszyka"}
              </StyledThActions>
            </tr>
          </thead>
          <tbody>
            {productsToDisplay
              ?.filter((product: ProductInterface) =>
                loggedUser?.role === Role.Client
                  ? product.status === Status.Available
                  : true
              )
              .map((product: ProductInterface) => {
                if (loggedUser?.role === Role.Client) {
                }
                return (
                  <Product type="page" key={product.id} product={product} />
                )
              })}
          </tbody>
        </StyledTableProducts>
        <Pagination listLength={productsList.length} />
      </StyledContainer>
    </>
  )
}

export default React.memo(ProductsPage)
