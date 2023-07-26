import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../store/store"
import { getProduct } from "../store/productsSlice"

import FormEditProduct from "../components/FormEditProduct"

import { StyledContainer, StyledTitle } from "./EditProductPage.css"

const EditProductPage: FC = () => {
  const dispatch = useDispatch()
  const product = useSelector((state: RootState) => state.products.item)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProduct(id!))
  }, [id])

  return (
    <>
      {product && (
        <StyledContainer>
          <StyledTitle>Edytuj produkt: </StyledTitle>
          <FormEditProduct product={product} />
        </StyledContainer>
      )}
    </>
  )
}

export default EditProductPage
