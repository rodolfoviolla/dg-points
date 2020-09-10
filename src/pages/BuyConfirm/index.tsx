import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const BuyConfirm: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default BuyConfirm;