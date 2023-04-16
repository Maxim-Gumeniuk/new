import { Container } from '../../../styled/common/container';
import { Square } from '../../../styled/common/square';

export const Loader = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Square transition={{ repeat: Infinity, duration: 1.7 }} animate={{ rotate: 360 }} ></Square>
        <Square style={{ position: 'absolute' }} transition={{ repeat: Infinity, duration: 1.4 }} animate={{ rotate: -360 }}></Square>
      </Container>
    </>
  )
}