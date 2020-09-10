import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BuyConfirm from '../BuyConfirm';

import SvgArrowLeft from '../../assets/icons/Arrow-Left.svg'
import SvgBag from '../../assets/icons/Bag.svg'

import imgLogo from '../../assets/images/logo2.png';
import imgLavitan from '../../assets/images/Lavitan.png';

import { 
  Container,
  Header,
  LogoImage,
  ScrollView,
  ProductSection,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductShortTitle,
  ProductDescription,
  DetailSection,
  SectionTitle,
  ProductDetails,
  FeatureSection,
  ProductFeature,
  FeatureTitle,
  FeatureDescription,
  Footer,
  FooterDetails,
  FooterDetailsText,
  FooterDetailsPoints,
  FooterButton,
  FooterButtonText,
  Modal,
} from './styles';
import Button from '../../components/Button';

const Product = () => {
  const { goBack } = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOnPressButton = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <SvgArrowLeft fill="#FFFFFF" />
        </TouchableOpacity>
        <LogoImage source={imgLogo} />
        <TouchableOpacity>
          <SvgBag fill="#FFFFFF" />
        </TouchableOpacity>
      </Header>

      <ScrollView>
        <ProductSection>
          <ProductImage source={imgLavitan} />
          <ProductTitle>
            Lavitan C.D.Z.S.E. Mais Imunidade
          </ProductTitle>
          <ProductInfo>
            <ProductShortTitle>
              Lavitan
            </ProductShortTitle>
            <ProductDescription>
              30 Comprimidos Revestidos
            </ProductDescription>
          </ProductInfo>
        </ProductSection>

        <DetailSection>
          <SectionTitle>
            Mais detalhes
          </SectionTitle>
          <ProductDetails>
            Levitan Imunidade é um multivitamínico que auxilia no funcionamento do sistema imune.
          </ProductDetails>
        </DetailSection>

        <FeatureSection>
          <SectionTitle>
            Características
          </SectionTitle>

          <ProductFeature>
            <FeatureTitle>
              Código do produto
            </FeatureTitle>
            <FeatureDescription>
              78390
            </FeatureDescription>
          </ProductFeature>

          <ProductFeature>
            <FeatureTitle>
              Quantidade
            </FeatureTitle>
            <FeatureDescription>
              30 Comprimidos Revestidos
            </FeatureDescription>
          </ProductFeature>

          <ProductFeature>
            <FeatureTitle>
              Marca
            </FeatureTitle>
            <FeatureDescription>
              Lavitan
            </FeatureDescription>
          </ProductFeature>

          <ProductFeature>
            <FeatureTitle>
              Princípio Ativo
            </FeatureTitle>
            <FeatureDescription>
              Vitamina C
            </FeatureDescription>
          </ProductFeature>
        </FeatureSection>
      </ScrollView>

      <Footer>
        <FooterDetails>
          <FooterDetailsText>
            Adquira por
          </FooterDetailsText>
          <FooterDetailsPoints>
            {90} pontos
          </FooterDetailsPoints>
        </FooterDetails>
        
        <Button onPress={handleOnPressButton}>Trocar pontos</Button>
      </Footer>

      <Modal
        animated={true}
        animationType="slide"
        visible={isModalVisible}
      >
        <BuyConfirm>
          <TouchableOpacity 
            onPress={() => setIsModalVisible(false)}
          >
            <Text>Fechar Modal</Text>
          </TouchableOpacity>
        </BuyConfirm>
      </Modal>
    </Container>
  );
}

export default Product;