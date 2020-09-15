import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import imgFriends from '../../assets/images/Friends.png'

import { 
  Container,
  Title,
  Image,
  MainTextContainer,
  MainText,
  MainSpanText,
  DisclaimerText,
  ButtonContainer,
} from './styles';

const InviteFriends = () => {
  const { navigate } = useNavigation();

  const handleOnPressButton = useCallback(() => {
    navigate('SendInvitation');
  }, []);

  return (
    <Container>
      <Title>Convidar amigos</Title>
      <Image source={imgFriends} />

      <MainTextContainer>
        <MainText>
          Você ganha{' '}
          <MainSpanText>50 pontos</MainSpanText>
          {' '}sempre que convidar um novo amigo para usar o aplicativo da Drogasil. Demais né?!
        </MainText>
      </MainTextContainer>

      <DisclaimerText>
        *Os pontos serão ganhos após o amigo indicado fazer o cadastro no aplicativo.
      </DisclaimerText>

      <ButtonContainer>
        <Button
          onPress={handleOnPressButton}
          style={{ width: '100%' }}
        >
          Convidar amigos
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default InviteFriends;