import { configureStore } from "@reduxjs/toolkit"

import { reducer as productsReducer } from "./productsSlice"
import { reducer as popupReducer } from "./popupSlice"
import { reducer as userReducer } from "./userSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    popup: popupReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
