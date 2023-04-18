import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

interface NavLink {
  size?: string;
}

export const NavLink = styled(Link)<NavLink>`
  text-decoration: none;
  color: ${(themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    themeProps.theme.colors.main};
  font-size: ${(props: NavLink) => props.size || 'inherit'};
`;
