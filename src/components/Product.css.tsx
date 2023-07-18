import styled from "styled-components"
import { breakpoints } from "../styles/theme"

export const StyledTr = styled.tr<{ status: boolean }>`
  background-color: ${({ status, theme }) =>
    status ? theme.availableBg : theme.unAvailableBg};
`

export const StyledTd = styled.td`
  text-align: center;
  &:first-child {
    border-radius: 10px 0 0 10px;
    padding: 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  @media ${breakpoints.xs} {
    &:nth-of-type(1):before {
      content: "Tytuł";
    }
    &:nth-of-type(2):before {
      content: "Cena";
    }
    &:nth-of-type(3):before {
      content: "Ilość";
    }
    &:nth-of-type(4):before {
      content: "Status";
    }
    &:nth-of-type(5):before {
      content: "Edytuj / Usuń";
    }
  }
`

export const StyledBoxActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 35px;
`
export const StyledBtnEdit = styled.button`
  background-color: #f5f2f2;
  border-radius: 5px;
  padding: 10px;
`
export const StyledBtnDelete = styled.button`
  background-color: ${({ theme }) => theme.error};
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  padding: 10px;
`
export const StyledInputAmount = styled.input`
  width: 50px;
  padding: 5px 10px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
export const StyledBtnAdd = styled.button``
