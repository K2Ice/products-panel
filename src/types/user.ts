import { ProductInterface } from "./products"

export enum Role {
  Admin = "Admin",
  Employee = "Employee",
  Client = "Client",
}

export interface UserInterface {
  id: string
  name: string
  email: string
  password: string
  role: Role
  cart: ProductInterface[] | null
}

export interface InitialStateUser {
  users: UserInterface[]
  loggedUser: UserInterface | null
  response: {
    success: boolean | null
    message: string
  }
}
