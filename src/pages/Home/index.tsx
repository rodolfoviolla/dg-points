import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

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
              <Button onPress={handleClickButton}>
                Quero Participar
              </Button>
            </CardMainContent>
          </CardMain>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Home;