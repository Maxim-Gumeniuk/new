import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

interface SquareProps {
  position?: string;
}

export const Square = styled(motion.div)<SquareProps>`
  height: 250px;
  width: 250px;
  border: 2.5px solid
    ${(themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
      themeProps.theme.colors.main};
`;
