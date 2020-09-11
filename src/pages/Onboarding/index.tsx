import React from 'react';

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
  Footer,
  FooterTop,
  SvgBackground,
  Paginator,
  PaginatorIndicator,
  FooterBottom,
  FooterBottomText,
} from './styles';

const Onboarding = () => {
  return (
    <Container>
      <Header>
        <Logo source={imgBrand} />
        <SvgClose fill="#6D7188" />
      </Header>

      <ScrollView>
        
        <Content>
          <SvgRemedy width={264} height={210} />
          <Title>Acumule pontos</Title>
          <Description>
            A cada{' '}
            <DescriptionSpan>R$20,00</DescriptionSpan>
            {' '}gastos em produtos no aplicativo,
            <DescriptionSpan>você ganha 5 pontos</DescriptionSpan>
            {' '}para juntar e trocar por produtos*
            <DescriptionSpanRed>de graça</DescriptionSpanRed>.
          </Description>
          <Footnote>*Consulte produtos disponíveis</Footnote>
        </Content>

      </ScrollView>

      <Footer>
        <FooterTop>
          <SvgBackground>
            <SvgChevronLeft />
          </SvgBackground>
          
          <Paginator>
            <PaginatorIndicator />
          </Paginator>

          <SvgBackground>
            <SvgChevronRight />
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