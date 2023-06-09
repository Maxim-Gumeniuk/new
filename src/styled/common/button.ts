import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { MyGlobalStyle } from '../global';

export const StyledButton = styled(motion.button)`
  background-color: ${(
    themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>,
  ) => themeProps.theme.colors.main};
  width: 100%;
  min-height: 40px;
  cursor: pointer;
  border-radius: ${(props: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) =>
    props.theme.borderRadius};
  border: none;
  color: #fff;

  & > span {
    cursor: pointer;
  }
`;
