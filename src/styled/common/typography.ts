import styled from 'styled-components';

interface Typography {
  size?: string;
  cursor?: string;
}

export const Typography = styled.span<Typography>`
  font-size: ${(props: Typography) => props.size || '14px'};
  cursor: ${(props: Typography) => props.cursor || 'auto'};
`;
