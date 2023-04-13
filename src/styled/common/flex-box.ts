import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridGap?: string;
}

export const FlexBox = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction || 'row'};
  justify-content: ${(props: FlexProps) => props.justifyContent || 'stretch'};
  align-items: ${(props: FlexProps) => props.alignItems || 'stretch'};
  gap: ${(props: FlexProps) => props.gap || 0};
  grid-gap: ${(props: FlexProps) => props.gridGap || 0};
`;
