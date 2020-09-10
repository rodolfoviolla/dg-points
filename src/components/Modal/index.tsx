import React from 'react';

import { Container, ModalContainer } from './styles'

const Modal: React.FC = ({ children }) => {
  return (
    <Container>
      <ModalContainer>
        {children}
      </ModalContainer>
    </Container>
  );
}

export default Modal;