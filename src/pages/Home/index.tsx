import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgLogo from '../../assets/images/logo2.png';
import imgCardMain from '../../assets/images/card-pontos.png';

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
  CardMainButtonText,
} from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  const handleClickButton = useCallback(() => {
    navigate('Points');
  }, []);

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
              <CardMainButton onPress={handleClickButton}>
                <CardMainButtonText>Quero Participar</CardMainButtonText>
              </CardMainButton>
            </CardMainContent>
          </CardMain>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Home;