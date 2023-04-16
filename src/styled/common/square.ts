import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const Square = styled(motion.div)`
  height: 250px;
  width: 250px;
  border: 2.5px solid
    ${(themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
      themeProps.theme.colors.main};
`;
