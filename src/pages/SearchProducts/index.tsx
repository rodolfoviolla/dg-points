import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import imgLavitan from '../../assets/images/Lavitan.png';
import imgHypera from '../../assets/images/Hypera.png';
import imgOurBrands from '../../assets/images/Our-Brands.png';
import imgSales from '../../assets/images/Sales.png';
import imgMedicines from '../../assets/images/Medicines.png';
import imgHealth from '../../assets/images/Health.png';
import imgSuplements from '../../assets/images/Suplements.png';

import SvgSearch from '../../assets/icons/Search.svg';

import {
  Container,
  Content,
  ScrollView,
  CategoriesContainer,
  CategoriesHeader,
  CategoriesTitle,
  CategoriesMore,
  CategoriesList,
  CategoryItem,
  CategoryImage,
  CategoryText,
  ProductsContainer,
  ProductsHeader,
  ProductsTitle,
  ProductsList,
  ProductItem,
  ProductItemImage,
  ProductItemTitle,
  ProductItemShortTitle,
  ProductDescription,
  ProductTextPoints,
  ProductPoints,
} from './styles';

const SearchProducts = () => {
  const { navigate } = useNavigation();

  const handlePressProductItem = useCallback(() => {
    navigate('ChangePointsRoutes', { screen: 'Product' });
  }, []);

  return (
    <Container>
      <PageHeader title="Troque seus pontos por produtos">
        <Input
          svgIcon={<SvgSearch fill="#a30010" />}
          containerStyle={{ marginTop: -34 }}
          placeholder="O que você procura?"
        />
      </PageHeader>

      <Content>

        <ScrollView>

          <CategoriesContainer>
            <CategoriesHeader>
              <CategoriesTitle>Categorias</CategoriesTitle>
              <CategoriesMore>Ver mais</CategoriesMore>
            </CategoriesHeader>

            <CategoriesList>
              <CategoryItem>
                <CategoryImage source={imgOurBrands} />
                <CategoryText>Nossas Marcas</CategoryText>
              </CategoryItem>

              <CategoryItem>
                <CategoryImage source={imgSales} />
                <CategoryText>Promoções do mês</CategoryText>
              </CategoryItem>

              <CategoryItem>
                <CategoryImage source={imgMedicines} />
                <CategoryText>Medicamentos</CategoryText>
              </CategoryItem>

              <CategoryItem>
                <CategoryImage source={imgHealth} />
                <CategoryText>Saúde</CategoryText>
              </CategoryItem>

              <CategoryItem>
                <CategoryImage source={imgSuplements} />
                <CategoryText>Vitaminas e Suplementos</CategoryText>
              </CategoryItem>

            </CategoriesList>

          </CategoriesContainer>

          <ProductsContainer>

            <ProductsHeader>
              <ProductsTitle>Produtos disponíveis</ProductsTitle>
            </ProductsHeader>

            <ProductsList>

              <ProductItem onPress={handlePressProductItem}>
                <ProductItemImage source={imgLavitan} />
                <ProductItemTitle>Lavitan C.D.Z.S.E. Mais Imunidade</ProductItemTitle>
                <ProductItemShortTitle>Lavitan</ProductItemShortTitle>
                <ProductDescription>30 Comprimidos Revestidos</ProductDescription>

                <ProductTextPoints>Troque por</ProductTextPoints>
                <ProductPoints>{90} pontos</ProductPoints>
              </ProductItem>

              <ProductItem onPress={handlePressProductItem}>
                <ProductItemImage source={imgHypera} />
                <ProductItemTitle>Addera D3 2.000UI</ProductItemTitle>
                <ProductItemShortTitle>Hyper</ProductItemShortTitle>
                <ProductDescription>30 Cápsulas 47.5g</ProductDescription>

                <ProductTextPoints>Troque por</ProductTextPoints>
                <ProductPoints>{90} pontos</ProductPoints>
              </ProductItem>

            </ProductsList>


          </ProductsContainer>
        </ScrollView>

      </Content>
    </Container>
  );
}

export default SearchProducts;