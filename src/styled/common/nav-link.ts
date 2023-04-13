import { Link } from 'react-router-dom';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    themeProps.theme.colors.main};
`;
