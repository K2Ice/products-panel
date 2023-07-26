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
import { updateProductAmount } from "../store/productsSlice"

interface ProductProps {
  product: ProductInterface
  type: "page" | "basket"
}

const Product: FC<ProductProps> = ({ product, type }) => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser)
  const navigate = useNavigate()

  const inputAmount = useRef<HTMLInputElement | null>(null)

  return (
    <StyledTr
      status={
        type === "basket" ? "basket" : product.status === Status.Available
      }
    >
      <StyledTd>{product.title}</StyledTd>
      <StyledTd>{product.price} zł</StyledTd>
      <StyledTd>{product.amount} szt.</StyledTd>
      {type === "page" && loggedUser?.role !== Role.Client && (
        <StyledTd>{product.status}</StyledTd>
      )}
      <StyledTd type={type} role={loggedUser?.role}>
        <StyledBoxActions>
          {type === "basket" ? (
            <StyledBtnDelete onClick={() => dispatch(openPopup(product))}>
              Usuń
            </StyledBtnDelete>
          ) : loggedUser?.role !== Role.Client ? (
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
                    Number(inputAmount.current.value) > 0 &&
                    Number(inputAmount.current?.value) <= product.amount
                  ) {
                    dispatch(
                      addProductToCart({
                        product: {
                          ...product,
                          amount: Number(inputAmount.current?.value),
                        },
                      })
                    )
                    dispatch(
                      updateProductAmount({
                        id: product.id,
                        amount: Number(inputAmount.current?.value),
                        type: "remove",
                      })
                    )
                    inputAmount.current.value = "1"
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
