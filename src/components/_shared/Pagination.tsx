import { useLocation, useNavigate } from "react-router"

import { StyledButton, StyledRow } from "./Pagination.css"

interface PaginationProps {
  listLength: number
}

export const Pagination = ({ listLength }: PaginationProps) => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const page = params.get("page")
  const sortParam = params.get("sort")
  const wayParam = params.get("way") ? String(params.get("way")) : ""
  const btnsNumber = listLength > 5 ? Math.ceil(listLength / 5) : 1
  const navigate = useNavigate()

  return (
    <StyledRow>
      {[...Array(btnsNumber)].map((el, i) => (
        <StyledButton
          key={i}
          onClick={() => {
            navigate(
              `/products?page=${String(i + 1)}${
                wayParam ? `&way=${wayParam}` : ""
              }${sortParam ? `&sort=${sortParam}` : ""}`
            )
          }}
          style={{
            opacity: `${i + 1 === Number(page) ? "1" : "0.5"}`,
            border: `${
              i + 1 === Number(page) ? "1px solid #000 " : "1px solid #e5e5e5"
            }`,
          }}
        >
          {i + 1}
        </StyledButton>
      ))}
    </StyledRow>
  )
}

export default Pagination
