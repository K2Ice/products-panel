import { FC } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Formik } from "formik"
import * as Yup from "yup"

import { addProduct } from "../store/productsSlice"

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
})

const initialValues: Omit<ProductInterface, "id"> = {
  title: "",
  price: 0,
  amount: 1,
  status: Status.Available,
}

const FormAddProduct: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitForm = (values: typeof initialValues) => {
    dispatch(
      addProduct({
        id: uuidv4(),
        ...values,
      })
    )
    navigate("products?page=1&way=asc&sort=title")
  }

  return (
    <div>
      <Formik
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
                      <option key={index} value={key}>
                        {value}
                      </option>
                    ))}
                  </StyledSelect>
                </StyledBoxFormElement>
                <StyledBoxBtns>
                  <StyledBtnSubmit type="submit">Dodaj</StyledBtnSubmit>
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

export default FormAddProduct
