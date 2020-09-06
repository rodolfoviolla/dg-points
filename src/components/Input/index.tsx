import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  svgIcon?: ReactNode;
  containerStyle?: {
    marginTop: number;
  };
}

import {
  Container,
  TextInput,
} from './styles';

const Input: React.FC<InputProps> = ({ svgIcon, containerStyle = {}, ...rest }) => {
  return (
    <Container style={containerStyle}>
      <TextInput placeholderTextColor="#6D7188" { ...rest } />
      {svgIcon}
    </Container>
  );
}

export default Input;