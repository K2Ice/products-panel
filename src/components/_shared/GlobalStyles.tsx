import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Permanent+Marker&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  

  input {
    outline: none;
    border: none;
    &:-webkit-autofill {
    box-shadow: 0 0 0 30px white inset !important; 
    }
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 30px white inset !important;
    }
  }
  


  select {
      &:focus {
      outline: none;
    }
  }
`

export default GlobalStyles
