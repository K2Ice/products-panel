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
      role: Role.Employee,
      cart: [],
    },
    {
      id: "ff7bffa7-b114-4eb9-8798-55ba2a10eb47",
      name: "Piotr Knys",
      email: "p.knys@gmail.com",
      password: "knys1234",
      role: Role.Client,
      cart: [],
    },
  ],
  loggedUser: null,

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
          state.loggedUser = {
            id: foundUser.id,
            name: foundUser.name,
            role: foundUser.role,
            cart: foundUser.cart,
          }
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
      action: PayloadAction<{ product: ProductInterface }>
    ) => {
      const { product } = action.payload
      let loggedUserCart = Array.isArray(state.loggedUser?.cart)
        ? state.loggedUser?.cart
        : []

      loggedUserCart?.find((p: ProductInterface) => p.id === product.id)
        ? (loggedUserCart = loggedUserCart.map((p: ProductInterface) =>
            p.id === action.payload.product.id
              ? { ...p, amount: p.amount + product.amount }
              : p
          ))
        : loggedUserCart?.push(product)

      state.loggedUser = { ...state.loggedUser, cart: loggedUserCart }

      state.users = state.users.map((user) =>
        user.id === state.loggedUser?.id
          ? { ...user, cart: loggedUserCart! }
          : user
      )
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const loggedUserCart = state.loggedUser?.cart!.filter(
        (product) => product.id !== action.payload
      )

      state.loggedUser = { ...state.loggedUser, cart: loggedUserCart }

      state.users = state.users.map((user) =>
        user.id === state.loggedUser?.id
          ? { ...user, cart: loggedUserCart! }
          : user
      )
    },
  },
})

export const {
  registerUser,
  loginUser,
  logoutUser,
  addProductToCart,
  removeProductFromCart,
} = userSlice.actions

export const { reducer } = userSlice
