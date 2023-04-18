import { motion } from 'framer-motion';
import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridGap?: string;
  height?: string;
}

export const FlexBox = styled(motion.div)<FlexProps>`
  display: flex;
  height: ${(props: FlexProps) => props.height || '100%'};
  flex-direction: ${(props: FlexProps) => props.direction || 'row'};
  justify-content: ${(props: FlexProps) => props.justifyContent || 'stretch'};
  align-items: ${(props: FlexProps) => props.alignItems || 'stretch'};
  grid-gap: ${(props: FlexProps) => props.gridGap || '0px'};
  & > * {
    margin-bottom: ${(props: FlexProps) => props.gap || '0px'};
  }
`;
