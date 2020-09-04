import React from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import PageHeader from '../../components/PageHeader';
import CircularProgress from '../../components/CircularProgress';

import SvgTarget from '../../assets/icons/Target.svg';
import SvgCheck from '../../assets/icons/Check.svg';
import SvgClock from '../../assets/icons/Clock.svg';
import SvgStop from '../../assets/icons/Stop.svg';

import {
  Container,
  MainCard,
  MainCardPoints,
  MainCardInfo,
  MainCardInfoTitle,
  BoldTitle,
  RegularTitle,
  MainCardInfoText,
  MainCardFooter,
  MainCardButton,
  MainCardButtonText,
  MainCardFooterText,
  Content,
  ContentHeader,
  ContentTitle,
  SvgBackgroundTitle,
  Card,
  SvgBackground,
  CardContent,
  CardContentTitle,
  CardContentText,
  CardStatus,
} from './styles';

const Points = () => {
  return (
    <Container >
      <PageHeader title="Meus Pontos" />

      <ScrollView 
        style={{
          marginTop: -55,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      >
        <MainCard>
          <MainCardPoints>
            <CircularProgress
              size={80}
              strokeWidth={5}
              text={`${456}/${600}`}
              progressPercent={456 * 100 / 600}
              textSize={14}
            />
            <MainCardInfo>
              <MainCardInfoTitle>
                <BoldTitle>456</BoldTitle>
                <RegularTitle>pontos</RegularTitle>
              </MainCardInfoTitle>
              <MainCardInfoText>
                Falta pouco para você alcançar sua meta. Continue assim!
              </MainCardInfoText>
            </MainCardInfo>
          </MainCardPoints>
          
          <MainCardFooter>
            <MainCardButton>
              <MainCardButtonText>
                Usar meus pontos
              </MainCardButtonText>
            </MainCardButton>
            
            <MainCardFooterText>Como funciona?</MainCardFooterText>
          </MainCardFooter>
        </MainCard>

        <Content>
          <ContentHeader>
            <ContentTitle>Metas do mês</ContentTitle>
            <SvgBackgroundTitle color="rgba(232, 104, 38, 0.16)" >
              <SvgTarget fill="#e86826" />
            </SvgBackgroundTitle>
          </ContentHeader>

          
            <Card>
              <SvgBackground color="rgba(23, 161, 84, 0.16)">
                <SvgCheck fill="#17a154" />
              </SvgBackground>

              <CardContent>
                <CardContentTitle>
                  Gaste R$30 em produtos
                </CardContentTitle>
                <CardContentText>
                  {`Prêmio: 7 pts. | R$${30} de R$${30}`}
                </CardContentText>
                <CardStatus>
                  <LinearGradient
                    colors={['#2FCA74', '#17A154']}
                    style={{ borderRadius: 50, height: '100%', width: `${30 * 100 / 30}%` }}
                  />
                </CardStatus>
              </CardContent>
            </Card>

            <Card>
              <SvgBackground color="rgba(255, 156, 92, 0.16)">
                <SvgClock fill="#ff9c5c" />
              </SvgBackground>

              <CardContent>
                <CardContentTitle>
                  Gaste R$40 em produtos
                </CardContentTitle>
                <CardContentText>
                  {`Prêmio: 10 pts. | R$${16} de R$${40}`}
                </CardContentText>
                <CardStatus>
                  <LinearGradient
                    colors={['#FF9C5C', '#E86826']}
                    style={{ borderRadius: 50, height: '100%', width: `${16 * 100 / 40}%` }}
                  />
                </CardStatus>
              </CardContent>
            </Card>

            <Card>
              <SvgBackground color="rgba(73, 75, 91, 0.16)">
                <SvgStop fill="#6D7188" />
              </SvgBackground>

              <CardContent>
                <CardContentTitle>
                  Gaste R$50 em produtos
                </CardContentTitle>
                <CardContentText>
                  {`Prêmio: 15 pts. | R$${0} de R$${50}`}
                </CardContentText>
                <CardStatus>
                  <LinearGradient
                    colors={['#FF9C5C', '#E86826']}
                    style={{ borderRadius: 50, height: '100%', width: `${0 * 100 / 50}%` }}
                  />
                </CardStatus>
              </CardContent>
            </Card>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Points;