import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #4a90e2;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #357ABD;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #4a90e2;
  }

  /* Global container padding */
  .container {
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
  }

  /* Default button reset */
  button {
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
  }

  /* Input field styling */
  input, textarea {
    font-family: inherit;
    background: #121212;
    border: 1px solid #4a90e2;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #357ABD;
  }

  /* Code Editor and Visualizer shared background */
  .editor-container, .visualizer-container {
    background-color: #1d1f21;
    border-radius: 15px;
    padding: 20px;
  }
`;

export default GlobalStyles;
