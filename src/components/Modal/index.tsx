import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import Button from '../Button';

import { Container, ModalContainer } from './styles'

const { height } = Dimensions.get('window');

interface ModalProps {
  visible: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, visible, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      closeModal();
    }
  }, [visible]);

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { 
        toValue: 0, duration: 100, useNativeDriver: true 
      }),
      Animated.timing(state.opacity, { 
        toValue: 1, duration: 300, useNativeDriver: true 
      }),
      Animated.spring(state.modal, { 
        toValue: 0, bounciness: 5, useNativeDriver: true 
      }),
    ]).start();
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { 
        toValue: height, duration: 250, useNativeDriver: true 
      }),
      Animated.timing(state.opacity, { 
        toValue: 0, duration: 300, useNativeDriver: true 
      }),
      Animated.timing(state.container, { 
        toValue: height, duration: 100, useNativeDriver: true 
      }),
    ]).start();
  }

  return (
    <Container style={{
      opacity: state.opacity,
      transform: [{
        translateY: state.container,
      }],
    }}>
      <ModalContainer style={{
        transform: [{
          translateY: state.modal,
        }]
      }}>
        {children}
        <Button onPress={close} style={{ width: '100%' }} >Fechar</Button>
      </ModalContainer>
    </Container>
  );
}

export default Modal;