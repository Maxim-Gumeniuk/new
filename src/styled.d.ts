import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    border: {
      main: string;
    };
    colors: {
      main: string;
      secondary: string;
    };
    fontSize: {
      title: string;
      common: string;
    };
  }
}
