import styled from 'styled-components';

export const Container = styled.div`
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
  
  @media(max-width: 1100px) {
    width: 60%;
  }

  @media(max-width: 800px) {
    width: 80%;
  }
`;
