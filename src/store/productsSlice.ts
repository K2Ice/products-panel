import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import {
  InitialStateProducts,
  ProductInterface,
  Status,
} from "../types/products"

const initialState: InitialStateProducts = {
  list: [
    {
      id: "0a41cdf0-0ab5-11ee-be56-0242ac120002",
      title: 'T-shirt "Kalahari" roz. M',
      price: 89.99,
      amount: 20,
      status: Status.Available,
    },
    {
      id: "0a41d0d4-0ab5-11ee-be56-0242ac120002",
      title: 'T-shirt "Nebraska" roz. S',
      price: 99.99,
      amount: 100,
      status: Status.Available,
    },
    {
      id: "0a41d20a-0ab5-11ee-be56-0242ac120002",
      title: 'Spodnie "Ohio" roz. L',
      price: 199.99,
      amount: 40,
      status: Status.Unavailable,
    },
    {
      id: "0a41d340-0ab5-11ee-be56-0242ac120002",
      title: 'Sweter "Minnesota" roz. XL',
      price: 189.99,
      amount: 120,
      status: Status.Available,
    },
    {
      id: "0a41d46c-0ab5-11ee-be56-0242ac120002",
      title: 'Bluza z kaputurem "New York" roz. L',
      price: 219.99,
      amount: 20,
      status: Status.Available,
    },
    {
      id: "1cb50734-0b70-11ee-be56-0242ac120002",
      title: 'Skarpetki "Alabama" 3 szt. roz. 43-46',
      price: 30,
      amount: 200,
      status: Status.Available,
    },
    {
      id: "1cb509d2-0b70-11ee-be56-0242ac120002",
      title: 'Skarpetki "Alabama" 3 szt. roz. 39-42',
      price: 30,
      amount: 250,
      status: Status.Available,
    },
    {
      id: "1cb50af4-0b70-11ee-be56-0242ac120002",
      title: 'Koszula męska "Miami" roz. L',
      price: 129.99,
      amount: 90,
      status: Status.Available,
    },
    {
      id: "1cb50c02-0b70-11ee-be56-0242ac120002",
      title: 'Koszula męska "Chicago" roz. XXL',
      price: 149.99,
      amount: 74,
      status: Status.Available,
    },
    {
      id: "1cb50fea-0b70-11ee-be56-0242ac120002",
      title: 'Koszula męska "Spurs" roz. M',
      price: 140.99,
      amount: 63,
      status: Status.Available,
    },
  ],
  item: null,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<string>) => {
      state.item =
        state.list.find((product) => product.id === action.payload) ?? null
    },

    addProduct: (state, action: PayloadAction<ProductInterface>) => {
      state.list = [action.payload, ...state.list]
    },

    editProduct: (state, action: PayloadAction<ProductInterface>) => {
      const { id, title, price, amount, status } = action.payload
      const editProduct = state.list.find((product) => product.id === id)
      if (editProduct) {
        editProduct.title = title
        editProduct.price = price
        editProduct.amount = amount
        editProduct.status = status
        state.item = null
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((product) => product.id !== action.payload)
    },
  },
})

export const { getProduct, addProduct, editProduct, removeProduct } =
  productSlice.actions
export const { reducer } = productSlice
