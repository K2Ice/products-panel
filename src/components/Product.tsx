import { FC, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { openPopup } from "../store/popupSlice"
import { ProductInterface, Status } from "../types/products"

import {
  StyledBoxActions,
  StyledBtnAdd,
  StyledBtnDelete,
  StyledBtnEdit,
  StyledInputAmount,
  StyledTd,
  StyledTr,
} from "./Product.css"
import { RootState } from "../store/store"
import { Role } from "../types/user"
import { addProductToCart } from "../store/userSlice"

const Product: FC<{ product: ProductInterface }> = ({ product }) => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser)
  const navigate = useNavigate()

  const inputAmount = useRef<HTMLInputElement | null>(null)

  return (
    <StyledTr status={product.status === Status.Available ? true : false}>
      <StyledTd>{product.title}</StyledTd>
      <StyledTd>{product.price} zł</StyledTd>
      <StyledTd>{product.amount} szt.</StyledTd>
      <StyledTd>{product.status}</StyledTd>
      <StyledTd>
        <StyledBoxActions>
          {loggedUser?.role !== Role.Client ? (
            <>
              <StyledBtnEdit
                onClick={() => navigate(`/product/edit/${product.id}`)}
              >
                Edytuj
              </StyledBtnEdit>
              {loggedUser?.role === Role.Admin && (
                <StyledBtnDelete onClick={() => dispatch(openPopup(product))}>
                  Usuń
                </StyledBtnDelete>
              )}
            </>
          ) : (
            <>
              <StyledInputAmount
                defaultValue={1}
                ref={inputAmount}
                type="number"
                max={product.amount}
              />
              <StyledBtnAdd
                onClick={() => {
                  if (
                    inputAmount.current &&
                    Number(inputAmount.current.value) > 0
                  ) {
                    dispatch(
                      addProductToCart({
                        id: loggedUser.id,
                        product: {
                          ...product,
                          amount: Number(inputAmount.current?.value),
                        },
                      })
                    )
                  }
                }}
              >
                Dodaj
              </StyledBtnAdd>
            </>
          )}
        </StyledBoxActions>
      </StyledTd>
    </StyledTr>
  )
}

export default Product
