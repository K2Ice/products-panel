import { FC } from "react"

import { StyledBoxCard, StyledBoxImg } from "./CardUser.css"

export interface UserProps {
  id: string
  name: string
  email: string
  photo: string
}

const CardUser: FC<UserProps> = ({ name, email, photo }) => {
  return (
    <StyledBoxCard>
      <StyledBoxImg>
        <img src={photo} alt={`${name}`} />
      </StyledBoxImg>
      <div>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
    </StyledBoxCard>
  )
}

export default CardUser
