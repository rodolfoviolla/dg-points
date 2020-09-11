import React from 'react';

import Button from '../../components/Button';

import { 
  Container,
  MainSection,
  Title,
  PointsSection,
  PointsItem,
  Description,
  PointsTotal,
  PointsAfter,
  AdressSection,
  Adress,
  AdressEdit,
  AdressEditText,
  DeliverySection,
  DeliveryTotal,
  DeliveryTotalValue,
  DeliveryDisclaimer,
  DeliverySpan,
} from './styles';

const BuyConfirm: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <Title>
          Confirmação de compra
        </Title>
      </MainSection>

      <PointsSection>
        <PointsItem>
          <Description>Total</Description>
          <PointsTotal>{90} pontos</PointsTotal>
        </PointsItem>

        <PointsItem style={{ marginTop: 8 }}>
          <Description>Pontos após a compra</Description>
          <PointsAfter>{366} pontos</PointsAfter>
        </PointsItem>
      </PointsSection>

      <AdressSection>
        <Title>Endereço de entrega</Title>
        <Adress>R. João de Paulo, 289 - Jd. Solimões.</Adress>
        <AdressEdit>
          <AdressEditText>Editar</AdressEditText>
        </AdressEdit>
      </AdressSection>

      <DeliverySection>
        <Title>Entrega</Title>
        <DeliveryTotal>
          <Description>Valor</Description>
          <DeliveryTotalValue>R$9,00</DeliveryTotalValue>
        </DeliveryTotal>
        <DeliveryDisclaimer>
          O valor de entrega será cobrado automaticamente através do{' '}
          <DeliverySpan>cartão de crédito cadastrado.</DeliverySpan>
        </DeliveryDisclaimer>
      </DeliverySection>

      <Button>Confirmar Compra</Button>
    </Container>
  );
}

export default BuyConfirm;