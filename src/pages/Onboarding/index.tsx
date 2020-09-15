import React, { useRef, useState } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Button from '../../components/Button';

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

interface ScrollToProps {
  x: number;
  y: number;
  animated: boolean;
}

interface ScrollProps extends ScrollViewProps {
  scrollTo: (params: ScrollToProps) => void;
}

const Onboarding = () => {
  const scrollViewRef = useRef<ScrollProps>(null);
  const { goBack } = useNavigation();

  const [interval, setInterval] = useState<number | undefined>(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const init = (width: number) => {
    setWidth(width);
    setIntervals(4);
  }

  const getInterval = (offset: any) => {
    for (let i = 1; i <= intervals; i++) {
      const roundedOffset = Math.round(offset * 100) / 100;
      const roundedCompare = Math.round((width / intervals) * i * 100) / 100;

      if (roundedOffset < roundedCompare) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let paginatorItems =[];
  for (let i = 1; i <= intervals; i++) {
    paginatorItems.push(
      <PaginatorIndicator
        key={i}
        selected={interval === i}
      />
    );
  }

  const handlePressPrevious = () => {
    const screenWidth = width / intervals;
    const numericInterval = !!interval ? interval : 1;
    const previousInterval = numericInterval - 2;

    const x = previousInterval * screenWidth;

    scrollViewRef.current?.scrollTo({ x, y: 1, animated: true });
  }

  const handlePressNext = () => {
    const screenWidth = width / intervals;
    const numericInterval = !!interval ? interval : 1;
    const nextInterval = numericInterval;

    const x = nextInterval * screenWidth;

    scrollViewRef.current?.scrollTo({ x, y: 1, animated: true });
  }

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
        ref={scrollViewRef}
        horizontal={true}
        contentContainerStyle={{ width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
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
        </Content>
        <Button style={{ marginTop: 24, width: '75%' }}>Começar agora</Button>
      </ScrollScreenContainer>

      </ScrollView>

      <Footer>
        <FooterTop>
          <TouchableOpacity disabled={interval === 1} onPress={handlePressPrevious}>
            <SvgBackground disabled={interval === 1} >
              <SvgChevronLeft fill={interval === 1 ? '#494B5B' : '#FF475A'} />
            </SvgBackground>
          </TouchableOpacity>
          
          <Paginator>
            {paginatorItems}
          </Paginator>

          <TouchableOpacity disabled={interval === intervals} onPress={handlePressNext}>
            <SvgBackground disabled={interval === intervals} >
              <SvgChevronRight fill={interval === intervals ? '#494B5B' : '#FF475A'} />
            </SvgBackground>
          </TouchableOpacity>
        </FooterTop>

        <FooterBottom>
          <TouchableOpacity onPress={() => goBack()}>
            <FooterBottomText>Pular</FooterBottomText>
          </TouchableOpacity>
        </FooterBottom>
      </Footer>

    </Container>
  );
}

export default Onboarding;