import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import SvgDelivery from '../../assets/illustrations/Delivery.svg'

import { 
  Container,
  Title,
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
      <SvgDelivery height={188} width={260} />
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