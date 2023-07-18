import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
`;

export default GlobalStyles;
