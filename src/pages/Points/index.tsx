import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import CircularProgress from '../../components/CircularProgress';

import SvgPill from '../../assets/icons/Pill.svg';
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
  CardStatusBackground,
  CardStatusFill,
} from './styles';
import Button from '../../components/Button';

const Points = () => {
  const { navigate } = useNavigation();

  const handlePressButton = useCallback(() => {
    navigate('SearchProducts');
  }, []);

  return (
    <Container >
      <PageHeader
        title="Meus Pontos"
        svgTitle={<SvgPill style={{ marginRight: 13 }} fill="#fff" />}
      />

      <ScrollView 
        style={{
          marginTop: -55,
        }}
        showsVerticalScrollIndicator={false}
      >
      <MainCard>
        <MainCardPoints>
          <CircularProgress
            size={80}
            strokeWidth={5}
            text={`${456}/${600}`}
            progressPercent={456 * 100 / 600}
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
          <Button style={{ width: '100%' }} onPress={handlePressButton}>
            {456 > 0 ? 'Usar meus pontos' : 'Comprar produtos'}
          </Button>
          
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
                <CardStatusBackground>
                  <CardStatusFill color="#17A154" width={`${30 * 100 / 30}%`}>
                    <LinearGradient
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      colors={['rgba(255,255,255,0.6)', 'transparent']}
                      style={{ borderRadius: 50, height: '100%', width: '100%' }}
                    />
                  </CardStatusFill>
                </CardStatusBackground>
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

                <CardStatusBackground>
                  <CardStatusFill color="#E86826" width={`${16 * 100 / 40}%`}>
                    <LinearGradient
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      colors={['rgba(255,255,255,0.6)', 'transparent']}
                      style={{ borderRadius: 50, height: '100%', width: '100%' }}
                    />
                  </CardStatusFill>
                </CardStatusBackground>
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
                <CardStatusBackground>
                  <CardStatusFill color="#E86826" width={`${0 * 100 / 50}%`}>
                    <LinearGradient
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      colors={['rgba(255,255,255,0.6)', 'transparent']}
                      style={{ borderRadius: 50, height: '100%', width: '100%' }}
                    />
                  </CardStatusFill>
                </CardStatusBackground>
              </CardContent>
            </Card>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Points;