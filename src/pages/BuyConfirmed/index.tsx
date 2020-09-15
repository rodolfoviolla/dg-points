import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import imgDelivery from '../../assets/images/Delivery.png'

import { 
  Container,
  Title,
  Image,
  TrackDelivery,
  MainTextContainer,
  MainText,
  SecondText,
  DisclaimerContainer,
  DisclaimerText,
  DisclaimerSpan,
  ButtonContainer,
} from './styles';

const BuyConfirmed = () => {
  const { navigate } = useNavigation();

  const handleOnPressButton = useCallback(() => {
    navigate('InviteFriends');
  }, []);

  return (
    <Container>
      <Title>Entrega à caminho!</Title>
      <Image source={imgDelivery} />
      <TrackDelivery>Acompanhar entrega</TrackDelivery>
      
      <MainTextContainer>
        <MainText>Seus pontos foram trocados por produtos.</MainText>
        <SecondText>Já, já você receberá a entrega na sua casa.</SecondText>
      </MainTextContainer>

      <DisclaimerContainer>
        <DisclaimerText>E lembre-se:{' '}</DisclaimerText>
        <DisclaimerSpan>continue juntando pontos :)</DisclaimerSpan>
      </DisclaimerContainer>
      
      <ButtonContainer>
        <Button 
          onPress={handleOnPressButton}
          style={{ width: '100%' }}
        >
          Ver meus pontos
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default BuyConfirmed;