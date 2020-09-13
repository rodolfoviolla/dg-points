import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import imgBrand from '../../assets/images/Brand.png';

import SvgRemedy from '../../assets/illustrations/Remedy.svg'
import SvgClose from '../../assets/icons/Close.svg'
import SvgChevronLeft from '../../assets/icons/Chevron-Left.svg'
import SvgChevronRight from '../../assets/icons/Chevron-Right.svg'

import { 
  Container,
  Header,
  Logo,
  ScrollView,
  Content,
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

      <ScrollView>
        
        <Content>
          <SvgRemedy width={284} height={212} />
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