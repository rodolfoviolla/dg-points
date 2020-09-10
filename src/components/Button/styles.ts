import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  background: #FF475A;
  border-radius: 4px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;
`;