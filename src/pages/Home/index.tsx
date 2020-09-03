import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import imgLogo from '../../assets/images/logo.png';
import imgCardMain from '../../assets/images/card-pontos.png';
import imgCardComprar from '../../assets/images/card-comprar.png';
import imgCardOfertas from '../../assets/images/card-ofertas.png';

import {
  Container,
  Header,
  HeaderLogo,
  Welcome,
  WelcomeTitle,
  WelcomeText,
  Content,
  CardMain,
  CardMainImage,
  CardMainContent,
  CardMainFrame,
  CardMainTitle,
  CardMainText,
  CardMainButton,
  Card,
  CardImage,
  CardMainButtonText,
} from './styles';

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <Header>
          <HeaderLogo source={imgLogo} />
        </Header>

        <Welcome>
          <WelcomeTitle>Oi, Felipe!</WelcomeTitle>
          <WelcomeText>Do que você precisa hoje?</WelcomeText>
        </Welcome>

        <Content>
          <CardMain>
            <CardMainImage source={imgCardMain} />
            <CardMainContent>
              <CardMainFrame>Novidade</CardMainFrame>
              <CardMainTitle>Fidelidade Drogasil</CardMainTitle>
              <CardMainText>
                Ganhe pontos a cada compra no aplicativo da Drogasil e troque por qualquer produto
              </CardMainText>
              <CardMainButton>
                <CardMainButtonText>Quero Participar</CardMainButtonText>
              </CardMainButton>
            </CardMainContent>
          </CardMain>

          <Card>
            <CardImage source={imgCardComprar} />
          </Card>

          <Card>
            <CardImage source={imgCardOfertas} />
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Home;