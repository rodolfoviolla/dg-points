import React from 'react';

import Button from '../../components/Button';

import SvgDelivery from '../../assets/illustrations/Delivery.svg'

import { 
  Container,
  Title,
  TrackDelivery,
  MainText,
  SecondText,
  DisclaimerContainer,
  DisclaimerText,
  DisclaimerSpan,
  ButtonContainer,
} from './styles';

const BuyConfirmed = () => {
  return (
    <Container>
      <Title>Entrega à caminho!</Title>
      <SvgDelivery height={188} width={260} />
      <TrackDelivery>Acompanhar entrega</TrackDelivery>
      <MainText>Seus pontos foram trocados por produtos.</MainText>
      <SecondText>Já, já você receberá a entrega na sua casa.</SecondText>
      <DisclaimerContainer>
        <DisclaimerText>E lembre-se:{' '}</DisclaimerText>
        <DisclaimerSpan>continue juntando pontos :)</DisclaimerSpan>
      </DisclaimerContainer>
      <ButtonContainer>
        <Button style={{ width: '100%' }}>Ver meus pontos</Button>
      </ButtonContainer>
    </Container>
  );
}

export default BuyConfirmed;