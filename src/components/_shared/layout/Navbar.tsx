import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { logoutUser } from "../../../store/userSlice"

import {
  StyledBoxUserLogout,
  StyledBtnLogout,
  StyledIconBars,
  StyledLink,
  StyledListLinks,
  StyledListMobileLinks,
  StyledNav,
  StyledTextRole,
  StyledTextUser,
} from "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { RootState } from "../../../store/store"
import { Role } from "../../../types/user"

const Navbar: FC = () => {
  const dispatch = useDispatch()
  const [isMobileActive, setIsMobileActive] = useState<boolean>(
    window.innerWidth < 768
  )
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser)

  return (
    <header>
      <StyledNav>
        <StyledListLinks>
          <StyledLink to={"/"}>Strona główna</StyledLink>
          <StyledLink to={"products?page=1&way=asc&sort=title"}>
            Lista produktów
          </StyledLink>
          {loggedUser?.role !== Role.Client ? (
            <StyledLink to={"product/add"}>Nowy produkt</StyledLink>
          ) : (
            <StyledLink to={"basket"}>Koszyk</StyledLink>
          )}
        </StyledListLinks>
        <StyledIconBars onClick={() => setIsMobileActive((prev) => !prev)}>
          {isMobileActive ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} size="lg" />
          )}
        </StyledIconBars>
        <StyledListMobileLinks
          isMobileActive={!isMobileActive}
          onClick={() => setIsMobileActive((prev) => !prev)}
        >
          <StyledLink to={"/"}>Strona główna</StyledLink>
          <StyledLink to={"products?page=1&way=asc&sort=title"}>
            Lista produktów
          </StyledLink>
          <StyledLink to={"product/add"}>Nowy produkt</StyledLink>
        </StyledListMobileLinks>
        <StyledBoxUserLogout>
          <StyledTextUser>
            Witaj {loggedUser?.name}{" "}
            <StyledTextRole>{loggedUser?.role}</StyledTextRole>
          </StyledTextUser>
          <StyledBtnLogout
            onClick={() => {
              dispatch(logoutUser())
            }}
          >
            Wyloguj
          </StyledBtnLogout>
        </StyledBoxUserLogout>
      </StyledNav>
    </header>
  )
}

export default Navbar
