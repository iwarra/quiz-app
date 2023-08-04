import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/lightning-questionmarks.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    text-shadow: 1px 2px 0px black;
    margin: 0;
  }

  h1 {
    font-family: Palanquin Dark;
    background-image: linear-gradient(180deg, #fff, #f7f5cf);
    font-weight: 700;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #93805c);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    background: #ece8de;
    border: 3px solid #372916;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .error {
    width: 400px;
    background: #fff;
    border: 2px solid #d38558;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
  }
`;