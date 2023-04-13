import {
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';

export interface MyGlobalStyle {
  theme: DefaultTheme;
}

export const MyGlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    overflow: hidden;
  }

  #root {
    height: 100vh;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
