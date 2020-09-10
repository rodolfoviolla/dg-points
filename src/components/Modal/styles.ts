import styled from 'styled-components/native'
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const ModalContainer = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  
  height: 542px;
  width: 100%;

  padding: 0 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const CloseBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  height: 45px;
  margin: 15px;
`;

export const ChildrenContent = styled.View`
  flex: 1;
`;