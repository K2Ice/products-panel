import { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"

import {
  StyledBoxImage,
  StyledContainer,
  StyledLink,
  StyledTitle,
} from "./HomePage.css"
const logo = require("../assets/homePagePic.jpg")

const HomePage: FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>Panel kontrolny produktów</StyledTitle>
      <StyledLink to="products?page=1&way=asc&sort=title">
        Przejdź do listy produktów
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </StyledLink>
      <StyledBoxImage>
        <img src={logo} alt="Modern transparent Wardrobe" />
      </StyledBoxImage>
    </StyledContainer>
  )
}

export default HomePage
