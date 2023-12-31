import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import EditProductPage from "./pages/EditProductPage"
import AddProductPage from "./pages/AddProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import BasketPage from "./pages/BasketPage"

import Layout from "./components/_shared/layout/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "product/add",
        element: <AddProductPage />,
      },
      {
        path: "product/edit/:id",
        element: <EditProductPage />,
      },
      {
        path: "basket",
        element: <BasketPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
