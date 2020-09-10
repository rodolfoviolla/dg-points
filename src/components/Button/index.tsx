import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText } from './styles';

const Button: React.FC<RectButtonProperties> = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;