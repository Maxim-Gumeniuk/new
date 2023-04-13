import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const StyledInput = styled.input`
  height: 40px;
  padding: 10px;
  border: ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    props.theme.border.main};
  width: 100%;
  border-radius: ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    props.theme.borderRadius};
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
