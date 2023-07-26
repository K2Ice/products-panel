import { Link } from "react-router-dom"
import styled from "styled-components"

import { breakpoints, maxWidthContainer } from "../../../styles/theme"

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: 0 -20px 50px 0 rgba(0, 0, 0, 0.4);
  position: relative;

  @media ${breakpoints.xs} {
    display: flex;
    align-items: center;
    height: 100px;
  }
`

export const StyledListLinks = styled.ul`
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media ${breakpoints.md} {
    justify-content: flex-start;
  }

  @media ${breakpoints.xs} {
    display: none;
  }
`
export const StyledBoxCart = styled.div`
  position: relative;
`

export const StyledLink = styled(Link)`
  width: 130px;
  height: 40px;
  background-color: ${({ theme }) => theme.primaryBg};
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.xs} {
    width: 150px;
    border-radius: 0;
    padding: 0 20px;

    justify-content: flex-start;
  }
`
export const StyledNumberProducts = styled.span`
  width: 25px;
  height: 25px;
  box-shadow: 0 0 2px 0 black;
  position: absolute;
  right: -5px;
  bottom: -15px;
  background-color: #fff;
  border-radius: 50%;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.xs} {
    bottom: 50%;
    translate: 0 50%;
    right: 15px;
  }
`

export const StyledBoxUserLogout = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  translate: 0 -50%;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const StyledTextUser = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`

export const StyledTextRole = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
`

export const StyledBtnLogout = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.cancel};
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
`

export const StyledIconBars = styled.div`
  display: none;
  @media ${breakpoints.xs} {
    display: block;
    font-size: 25px;
    margin: 0 20px;
  }
`

interface StyledListMobileProps {
  isMobileActive: boolean
}

export const StyledListMobileLinks = styled.ul<StyledListMobileProps>`
  display: none;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 100%;
  transition: 0.3s;
  height: 0;

  @media ${breakpoints.xs} {
    display: flex;
    background-color: ${({ theme }) => theme.secondaryBg};
    flex-direction: column;
    height: ${({ isMobileActive }) => (isMobileActive ? "120px" : "0")};
    overflow: hidden;
  }
`
