import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const BurgerContainer = styled(motion.div)`
  width: 30%;
  border-right: 2px solid
    ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
      props.theme.colors.main};
  height: 100vh;
`;
