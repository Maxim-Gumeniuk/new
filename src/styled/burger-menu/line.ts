import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: -6px;
  background-color: ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    props.theme.colors.main};
`;
