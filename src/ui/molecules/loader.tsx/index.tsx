import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Container } from '../../../styled/common/container';
import { Square } from '../../../styled/common/square';
import { MyGlobalStyle } from '../../../styled/global';

const Point = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: 0.2px solid ${(themeProps: ThemedStyledProps<MyGlobalStyle, DefaultTheme>) => themeProps.theme.colors.main};
`

export const Loader = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Point style={{ position: 'absolute' }} animate={{ scale: [10, 0, 5, 2, 10] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeIn' }}></Point>
        <Square transition={{ repeat: Infinity, duration: 1.7 }} animate={{ rotate: 360 }} ></Square>
        <Square style={{ position: 'absolute' }} transition={{ repeat: Infinity, duration: 1.4 }} animate={{ rotate: -360 }}>

        </Square>
      </Container>
    </>
  )
}