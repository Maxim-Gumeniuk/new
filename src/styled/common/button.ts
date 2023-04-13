import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const StyledButton = styled.button`
  background-color: ${(
    themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>,
  ) => themeProps.theme.colors.main};
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    props.theme.borderRadius};
  border: none;
  color: #fff;
`;
