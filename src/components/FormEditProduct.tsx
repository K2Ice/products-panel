import { FC } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"

import { editProduct } from "../store/productsSlice"

import { ProductInterface, Status } from "../types/products"

import {
  StyledBoxBtns,
  StyledBoxForm,
  StyledBoxFormElement,
  StyledBoxLabel,
  StyledBtnCancel,
  StyledBtnSubmit,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextError,
} from "./Form.css"

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Nazwa produktu jest wymagana.")
    .min(3, "Nazwa produktu musi mieć min. 3 znaki.")
    .max(40, "Nazwa produktu może mieć max. 40 znaków."),
  price: Yup.number()
    .required("Cena produktu jest wymagana.")
    .min(0.01, "Minimalna cena to 0.01"),
  amount: Yup.number()
    .required("Ilość produktu jest wymagana.")
    .min(1, "Minimalna ilość to 1 sztuka"),
  status: Yup.mixed().oneOf(Object.values(Status)),
})

interface FormEditProps {
  product: ProductInterface
}

const FormEditProduct: FC<FormEditProps> = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues: Omit<ProductInterface, "id"> = {
    title: product.title,
    price: product.price,
    amount: product.amount,
    status: product.status,
  }

  const submitForm = (values: typeof initialValues) => {
    dispatch(
      editProduct({
        id: product.id,
        ...values,
      })
    )
    navigate("/products?page=1&way=asc&sort=title")
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          } = formik
          return (
            <StyledBoxForm>
              <StyledForm onSubmit={handleSubmit} noValidate>
                <StyledBoxFormElement>
                  <StyledBoxLabel>
                    <label>Nazwa produktu:</label>
                    {errors.title && touched.title && (
                      <StyledTextError>{errors.title}</StyledTextError>
                    )}
                  </StyledBoxLabel>
                  <StyledInput
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </StyledBoxFormElement>
                <StyledBoxFormElement>
                  <StyledBoxLabel>
                    <label>Cena produktu:</label>
                    {errors.price && touched.price && (
                      <StyledTextError>{errors.price}</StyledTextError>
                    )}
                  </StyledBoxLabel>
                  <StyledInput
                    name="price"
                    type="number"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </StyledBoxFormElement>
                <StyledBoxFormElement>
                  <StyledBoxLabel>
                    <label>Ilość produktu:</label>
                    {errors.amount && touched.amount && (
                      <StyledTextError>{errors.amount}</StyledTextError>
                    )}
                  </StyledBoxLabel>
                  <StyledInput
                    name="amount"
                    type="text"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </StyledBoxFormElement>
                <StyledBoxFormElement>
                  <StyledBoxLabel>
                    <label>Status produktu:</label>
                  </StyledBoxLabel>
                  <StyledSelect
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                  >
                    {Object.entries(Status).map(([key, value], index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </StyledSelect>
                </StyledBoxFormElement>
                <StyledBoxBtns>
                  <StyledBtnSubmit type="submit">Zapisz</StyledBtnSubmit>
                  <StyledBtnCancel onClick={() => navigate(-1)} type="button">
                    Anuluj
                  </StyledBtnCancel>
                </StyledBoxBtns>
              </StyledForm>
            </StyledBoxForm>
          )
        }}
      </Formik>
    </div>
  )
}

export default FormEditProduct
