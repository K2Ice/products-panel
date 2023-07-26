import { ProductInterface } from "./products"

export enum Role {
  Admin = "Admin",
  Employee = "Pracownik",
  Client = "Klient",
}

export interface UserInterface {
  id: string
  name: string
  email: string
  password: string
  role: Role
  cart: ProductInterface[]
}

export interface InitialStateUser {
  users: UserInterface[]
  loggedUser: Partial<UserInterface> | null
  response: {
    success: boolean | null
    message: string
  }
}
