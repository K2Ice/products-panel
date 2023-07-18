import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { FormRegisterValues } from "../types/forms";
import { RootState } from "../store/store";
import { registerUser } from "../store/userSlice";

import {
  StyledBoxForm,
  StyledForm,
  StyledInput,
  StyledBtnSubmit,
  StyledTextError,
  StyledBoxLabel,
  StyledTextRedirect,
  StyledLinkRedirect,
  StyledTextErrorResponse,
} from "./Form.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Podaj imię i nazwisko.")
    .min(4, "Imię i nazwisko muszą mieć min. 4 znaki.")
    .max(40, "Imię i nazwisko mogą mieć maskymalnie 40 znaków."),
  email: Yup.string()
    .required("Podaj email.")
    .email("Podaj poprawny email.")
    .min(4, "Email musi mieć min. 4 znaki.")
    .max(40, "Email może mieć max. 40 znaków."),
  password: Yup.string()
    .required("Podaj hasło.")
    .min(8, "Hasło musi mieć min. 8 znaków.")
    .max(50, "Hasło może mieć max. 50 znaków."),
});

const initialValues: FormRegisterValues = {
  name: "",
  email: "",
  password: "",
};

const FormRegister: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const response = useSelector((state: RootState) => state.user.response);

  const submitForm = (values: FormRegisterValues) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    if (response.success) {
      navigate("/");
    }
  }, [response]);
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
        } = formik;
        return (
          <StyledBoxForm>
            <StyledForm onSubmit={handleSubmit} noValidate>
              <StyledBoxLabel>
                <label>Imię i nazwisko</label>
                {errors.name && touched.name && (
                  <StyledTextError>{errors.name}</StyledTextError>
                )}
              </StyledBoxLabel>
              <StyledInput
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledBoxLabel>
                <label>Adres email</label>
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
              <StyledBoxLabel>
                <label>Hasło</label>
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

              <StyledBtnSubmit type="submit">Rejestracja</StyledBtnSubmit>
              <StyledTextRedirect>
                Masz już konto?
                <StyledLinkRedirect to="/login">Zaloguj się</StyledLinkRedirect>
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
        );
      }}
    </Formik>
  );
};

export default FormRegister;
