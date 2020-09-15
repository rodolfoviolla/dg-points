import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import imgBrand from '../../assets/images/Brand.png';
import imgRemedy from '../../assets/images/Remedy.png'
import imgTarget from '../../assets/images/Target.png'
import imgFriends from '../../assets/images/Friends.png'
import imgBuy from '../../assets/images/Buy.png'

import SvgClose from '../../assets/icons/Close.svg'
import SvgChevronLeft from '../../assets/icons/Chevron-Left.svg'
import SvgChevronRight from '../../assets/icons/Chevron-Right.svg'

import { 
  ScrollScreenContainer,
  Container,
  Header,
  Logo,
  Content,
  Image,
  Title,
  Description,
  DescriptionSpan,
  DescriptionSpanRed,
  Footnote,
  FootnoteText,
  Footer,
  FooterTop,
  SvgBackground,
  Paginator,
  PaginatorIndicator,
  FooterBottom,
  FooterBottomText,
} from './styles';
import Button from '../../components/Button';

const Onboarding = () => {
  const isDisabled = true;

  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        <SvgClose />
        <Logo source={imgBrand} />
        <TouchableOpacity onPress={() => goBack()}>
          <SvgClose fill="#6D7188" />
        </TouchableOpacity>
      </Header>

      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
      >

      <ScrollScreenContainer>
        <Content>
          <Image source={imgRemedy} />
          <Title>Acumule pontos</Title>
          <Description>
            A cada{' '}
            <DescriptionSpan>R$20,00</DescriptionSpan>
            {' '}gastos em produtos no aplicativo,
            <DescriptionSpan>você ganha 5 pontos</DescriptionSpan>
            {' '}para juntar e trocar por produtos*{' '}
            <DescriptionSpanRed>de graça</DescriptionSpanRed>.
          </Description>
        </Content>
        <Footnote>
          <FootnoteText>*Consulte produtos disponíveis</FootnoteText>
        </Footnote>
      </ScrollScreenContainer>

      <ScrollScreenContainer>
        <Content>
          <Image source={imgTarget} />
          <Title>Cumpra as metas</Title>
          <Description>
            Metas diferentes a cada mês. Alcance todas elas e{' '}
            <DescriptionSpanRed>ganhe ainda mais pontos</DescriptionSpanRed>!
          </Description>
        </Content>
      </ScrollScreenContainer>

      <ScrollScreenContainer>
        <Content>
          <Image source={imgFriends} />
          <Title>Convide seus amigos</Title>
          <Description>
            Você ganha{' '}
            <DescriptionSpanRed>50 pontos</DescriptionSpanRed>*
            {' '}sempre que convidar um novo amigo para usar o aplicativo da Drogasil. Demais né?!
          </Description>
        </Content>
        <Footnote>
          <FootnoteText>*Os pontos serão ganhos após o amigo indicado fazer o cadastro no aplicativo</FootnoteText>
        </Footnote>
      </ScrollScreenContainer>

      <ScrollScreenContainer>
        <Content>
          <Image source={imgBuy} />
          <Title>Utilize seus pontos</Title>
          <Description>
            Seus pontos tem validade de 1 ano a partir do momento que você os ganha. Então é só não marcar bobeira, juntar pontos e trocar por{' '}
            <DescriptionSpanRed>produtos gratuitamente</DescriptionSpanRed>.
          </Description>
          <Button style={{ marginTop: 24, width: '75%' }}>Começar agora</Button>
        </Content>
      </ScrollScreenContainer>

      </ScrollView>

      <Footer>
        <FooterTop>
          <SvgBackground disabled={isDisabled} >
            <SvgChevronLeft fill={isDisabled ? '#494B5B' : '#FF475A'} />
          </SvgBackground>
          
          <Paginator>
            <PaginatorIndicator selected={isDisabled} />
            <PaginatorIndicator selected={!isDisabled} />
            <PaginatorIndicator selected={!isDisabled} />
            <PaginatorIndicator selected={!isDisabled} />
          </Paginator>

          <SvgBackground disabled={!isDisabled} >
            <SvgChevronRight fill={!isDisabled ? '#494B5B' : '#FF475A'} />
          </SvgBackground>
        </FooterTop>

        <FooterBottom>
          <FooterBottomText>Pular</FooterBottomText>
        </FooterBottom>
      </Footer>

    </Container>
  );
}

export default Onboarding;