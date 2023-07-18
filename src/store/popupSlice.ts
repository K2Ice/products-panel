import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { ProductInterface } from "../types/products"
import { InitialStatePopup } from "../types/popup"

const initialState: InitialStatePopup = {
  isOpen: false,
  productData: null,
}

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<ProductInterface>) => {
      state.isOpen = true
      state.productData = action.payload
    },

    closePopup: (state) => {
      state.isOpen = false
      state.productData = null
    },
  },
})

export const { openPopup, closePopup } = popupSlice.actions
export const { reducer } = popupSlice
