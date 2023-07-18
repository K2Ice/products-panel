export enum Status {
  Available = "Dostępny",
  Unavailable = "Niedostępny",
}

export interface ProductInterface {
  id: string
  title: string
  price: number
  amount: number
  status: Status
}

export interface InitialStateProducts {
  list: ProductInterface[]
  item: ProductInterface | null
}
