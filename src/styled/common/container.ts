import styled from 'styled-components';

interface ContainerProps {
  position?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28%;
  padding: 10px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;
