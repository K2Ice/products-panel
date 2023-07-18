import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../styles/theme"

export const StyledContainer = styled.div`
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledTableProducts = styled.table`
  table-layout: fixed;
  border-spacing: 0 10px;
  width: 80%;
  margin: 50px auto;

  @media ${breakpoints.xs} {
    width: 80%;
    height: auto;
    border-spacing: 0 15px;
  }

  & th {
    height: 75px;
    @media ${breakpoints.xs} {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  }

  & td {
    height: 75px;
    @media ${breakpoints.xs} {
      display: flex !important;
      justify-content: center;
      align-items: center;
      border: none !important;
      border-bottom: 1px solid #eee !important;
      position: relative !important;
      padding-left: 50% !important;
      padding-block: 10px;

      &:before {
        position: absolute;
        top: 50%;
        left: 0px;
        width: 40%;
        white-space: nowrap;
        translate: 0 -50%;
        font-weight: 500;
        font-style: italic;
      }
    }
  }
`

export const StyledThTitle = styled.th`
  /* text-align: left;
  padding-left: 15px; */
`

export const StyledThPrice = styled.th`
  width: 100px;
`
export const StyledThAmount = styled.th`
  width: 100px;
`
export const StyledThStatus = styled.th`
  width: 100px;
`
export const StyledThActions = styled.th`
  width: 180px;
`
export const StyledBtnArrow = styled.button<{ color: string; wayUp: boolean }>`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  color: ${({ color }) => color};
  transform: ${({ wayUp }) => (wayUp ? "" : "rotate(180deg)")};
`
