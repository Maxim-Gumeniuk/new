import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Typography {
  size?: string;
  cursor?: string;
}

export const Typography = styled(motion.span)<Typography>`
  font-size: ${(props: Typography) => props.size || '14px'};
  cursor: ${(props: Typography) => props.cursor || 'auto'};
`;
