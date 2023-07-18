import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

import { InitialStateUser, Role, UserInterface } from "../types/user"
import { FormRegisterValues } from "../types/forms"
import { ProductInterface } from "../types/products"

const initialState: InitialStateUser = {
  users: [
    {
      id: "56ddd1ea-0b73-11ee-be56-0242ac120002",
      name: "Jan Nowak",
      email: "j.nowak@gmail.com",
      password: "123nowak123",
      role: Role.Admin,
      cart: [],
    },
    {
      id: "9fe79178-24fa-11ee-be56-0242ac120002",
      name: "Tomasz Kowalski",
      email: "t.kowalski@gmail.com",
      password: "kowalski123",
      role: Role.Client,
      cart: [],
    },
  ],
  //Change to null, before make production
  loggedUser: {
    id: "9fe79178-24fa-11ee-be56-0242ac120002",
    name: "Tomasz Kowalski",
    email: "t.kowalski@gmail.com",
    password: "kowalski123",
    role: Role.Client,
    cart: [],
  },

  response: {
    success: null,
    message: "",
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<FormRegisterValues>) => {
      const foundUser = state.users.find(
        (user) => user.email === action.payload.email
      )
      if (foundUser) {
        state.response.success = false
        state.response.message = "Użytkownik o podanym emailu już istnieje."
      } else {
        const { name, email, password } = action.payload

        const newUser: UserInterface = {
          id: uuidv4(),
          name,
          email,
          password,
          role: Role.Admin,
          cart: [],
        }

        state.users = [...state.users, newUser]

        state.response = {
          success: true,
          message: "",
        }

        state.loggedUser = newUser
      }
    },

    loginUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload
      const foundUser = state.users.find((user) => user.email === email)

      if (!foundUser) {
        state.response.success = false
        state.response.message = "Brak użytkownika o podanym adresie email."
      } else {
        if (foundUser.password !== password) {
          state.response = {
            success: false,
            message: "Nieprawidłowe hasło.",
          }
        } else {
          state.response = {
            success: true,
            message: "",
          }
          state.loggedUser = foundUser
        }
      }
    },

    logoutUser: (state) => {
      state.loggedUser = null
      state.response = {
        success: null,
        message: "",
      }
    },
    addProductToCart: (
      state,
      action: PayloadAction<{ id: string; product: ProductInterface }>
    ) => {
      const foundUser = state.users.find(
        (user) => user.id === action.payload.id
      )
      if (!foundUser) return

      const updatedCart = foundUser.cart
        ? foundUser.cart.map((product) =>
            product.id === action.payload.product.id
              ? {
                  ...product,
                  amount: product.amount + action.payload.product.amount,
                }
              : product
          )
        : [action.payload.product]
      console.log(updatedCart)

      state.loggedUser = { ...foundUser, cart: updatedCart }
    },
  },
})

export const { registerUser, loginUser, logoutUser, addProductToCart } =
  userSlice.actions

export const { reducer } = userSlice