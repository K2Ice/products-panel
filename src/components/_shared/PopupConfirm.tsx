import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { RootState } from "../../store/store"
import { removeProduct, updateProductAmount } from "../../store/productsSlice"
import { closePopup } from "../../store/popupSlice"
import { removeProductFromCart } from "../../store/userSlice"

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: ${({ theme }) => theme.secondaryBg};
  border: 2px solid ${({ theme }) => theme.primaryBg};
  padding: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 100;
`

const StyledTitle = styled.p`
  text-align: center;
  line-height: 30px;
`

const StyledBoxBtns = styled.div`
  display: flex;
  gap: 10px;
`

interface StyledBtnProps {
  color: string
}

const StyledBtn = styled.button<StyledBtnProps>`
  padding: 10px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ color }) => color};
`

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`

const PopupConfirm: FC<{ type: "page" | "basket" }> = ({ type }) => {
  const dispatch = useDispatch()
  const productData = useSelector((state: RootState) => state.popup.productData)

  return (
    <>
      <StyledBackdrop></StyledBackdrop>
      <StyledContainer>
        <StyledTitle>
          Czy na pewno checesz usunąć produkt: <br />
          {productData?.title}
        </StyledTitle>
        <StyledBoxBtns>
          <StyledBtn
            color="green"
            onClick={() => {
              if (type === "page") {
                dispatch(removeProduct(productData!.id))
              } else {
                dispatch(removeProductFromCart(productData!.id))
                dispatch(
                  updateProductAmount({
                    id: productData!.id,
                    amount: productData!.amount,
                    type: "add",
                  })
                )
              }
              dispatch(closePopup())
            }}
          >
            Tak
          </StyledBtn>
          <StyledBtn
            color="red"
            onClick={() => {
              dispatch(closePopup())
            }}
          >
            Nie
          </StyledBtn>
        </StyledBoxBtns>
      </StyledContainer>
    </>
  )
}

export default PopupConfirm
