import { ProductInterface } from "./products"

export interface InitialStatePopup {
  isOpen: boolean
  productData: ProductInterface | null
}
