import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Formik } from "formik"
import * as Yup from "yup"

import { loginUser } from "../store/userSlice"
import { RootState } from "../store/store"

import { FormLoginValues } from "../types/forms"

import {
  StyledBoxForm,
  StyledBoxFormElement,
  StyledBoxLabel,
  StyledBtnSubmit,
  StyledForm,
  StyledInput,
  StyledLinkRedirect,
  StyledTextError,
  StyledTextErrorResponse,
  StyledTextRedirect,
} from "./Form.css"

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Podaj email.").email("Podaj poprawny email."),
  password: Yup.string().required("Podaj hasło."),
})

const FormLogin: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { response } = useSelector((state: RootState) => state.user)

  const initialValues: FormLoginValues = {
    email: "",
    password: "",
  }

  const submitForm = (values: FormLoginValues) => {
    dispatch(loginUser(values))
  }

  useEffect(() => {
    if (response.success) {
      navigate("/")
    }
  }, [response])

  return (
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
                  <label>Email:</label>
                  {errors.email && touched.email && (
                    <StyledTextError>{errors.email}</StyledTextError>
                  )}
                </StyledBoxLabel>
                <StyledInput
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledBoxFormElement>
              <StyledBoxFormElement>
                <StyledBoxLabel>
                  <label>Password:</label>
                  {errors.password && touched.password && (
                    <StyledTextError>{errors.password}</StyledTextError>
                  )}
                </StyledBoxLabel>
                <StyledInput
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </StyledBoxFormElement>
              <StyledBtnSubmit type="submit">Zaloguj się</StyledBtnSubmit>
              <StyledTextRedirect>
                Nie masz jeszcze konta?
                <StyledLinkRedirect to="/register">
                  Zarejestruj się
                </StyledLinkRedirect>
              </StyledTextRedirect>
              <div>
                {!response.success && response.message && (
                  <StyledTextErrorResponse>
                    {response.message}
                  </StyledTextErrorResponse>
                )}
              </div>
            </StyledForm>
          </StyledBoxForm>
        )
      }}
    </Formik>
  )
}

export default FormLogin
