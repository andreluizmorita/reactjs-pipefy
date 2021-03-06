import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100%;
    }

    body {
      font: 14px 'Roboto', sans-serif;
      color: #333;
      background: #e9e9e9;
      -webkit-font-smoothing: antialiased !important;
    }

    ul {
      list-style: none;
    }

`;