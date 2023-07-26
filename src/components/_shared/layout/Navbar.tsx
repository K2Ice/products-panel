import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import { logoutUser } from "../../../store/userSlice"
import { RootState } from "../../../store/store"

import { Role } from "../../../types/user"

import {
  StyledBoxCart,
  StyledBoxUserLogout,
  StyledBtnLogout,
  StyledIconBars,
  StyledLink,
  StyledListLinks,
  StyledListMobileLinks,
  StyledNav,
  StyledNumberProducts,
  StyledTextRole,
  StyledTextUser,
} from "./Navbar.css"

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
          <li>
            <StyledLink to={"/"}>Strona główna</StyledLink>
          </li>
          <li>
            <StyledLink to={"/products?page=1&way=asc&sort=title"}>
              Lista produktów
            </StyledLink>
          </li>
          <li>
            {loggedUser?.role !== Role.Client ? (
              <StyledLink to={"/product/add"}>Nowy produkt</StyledLink>
            ) : (
              <StyledBoxCart>
                <StyledLink to={"/basket"}>Koszyk</StyledLink>
                {loggedUser.cart?.length ? (
                  <StyledNumberProducts>
                    {loggedUser.cart?.length}
                  </StyledNumberProducts>
                ) : null}
              </StyledBoxCart>
            )}
          </li>
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
          <li>
            <StyledLink to={"/"}>Strona główna</StyledLink>
          </li>
          <li>
            <StyledLink to={"/products?page=1&way=asc&sort=title"}>
              Lista produktów
            </StyledLink>
          </li>
          <li>
            {loggedUser?.role !== Role.Client ? (
              <StyledLink to={"/product/add"}>Nowy produkt</StyledLink>
            ) : (
              <StyledBoxCart>
                <StyledLink to={"/basket"}>Koszyk</StyledLink>
                {loggedUser.cart?.length ? (
                  <StyledNumberProducts>
                    {loggedUser.cart?.length}
                  </StyledNumberProducts>
                ) : null}
              </StyledBoxCart>
            )}
          </li>
        </StyledListMobileLinks>
        <StyledBoxUserLogout>
          <StyledTextUser>
            {loggedUser?.name}
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
