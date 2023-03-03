import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif;

    
  @media screen and (max-width: 1025px) {
    font-size: 87.5%;
  }
}


::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: #000
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: #00df5e
  }
`
