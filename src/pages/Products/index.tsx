import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import imgLavitan from '../../assets/images/Lavitan.png';
import imgHypera from '../../assets/images/Hypera.png';

import SvgSearch from '../../assets/icons/Search.svg';
import SvgOurBrands from '../../assets/images/Our-Brands.svg';
import SvgSales from '../../assets/images/Sales.svg';
import SvgMedicines from '../../assets/images/Medicines.svg';
import SvgHealth from '../../assets/images/Health.svg';
import SvgSuplements from '../../assets/images/Suplements.svg';

import {
  Container,
  Content,
  CategoriesContainer,
  CategoriesHeader,
  CategoriesTitle,
  CategoriesMore,
  CategoriesList,
  CategoryItem,
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

const Products = () => {
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

        <CategoriesContainer>

          <CategoriesHeader>
            <CategoriesTitle>Categorias</CategoriesTitle>
            <CategoriesMore>Ver mais</CategoriesMore>
          </CategoriesHeader>

          <CategoriesList>
            <CategoryItem>
              <SvgOurBrands fill="#a30010" />
              <CategoryText>Nossas Marcas</CategoryText>
            </CategoryItem>

            <CategoryItem>
              <SvgSales fill="#a30010" />
              <CategoryText>Promoções do mês</CategoryText>
            </CategoryItem>

            <CategoryItem>
              <SvgMedicines fill="#a30010" />
              <CategoryText>Medicamentos</CategoryText>
            </CategoryItem>

            <CategoryItem>
              <SvgHealth fill="#a30010" />
              <CategoryText>Saúde</CategoryText>
            </CategoryItem>

            <CategoryItem>
              <SvgSuplements fill="#a30010" />
              <CategoryText>Vitaminas e Suplementos</CategoryText>
            </CategoryItem>

          </CategoriesList>

        </CategoriesContainer>

        <ProductsContainer>

          <ProductsHeader>
            <ProductsTitle>Produtos disponíveis</ProductsTitle>
          </ProductsHeader>

          <ProductsList>

            <ProductItem>
              <ProductItemImage source={imgLavitan} />
              <ProductItemTitle>Lavitan C.D.Z.S.E. Mais Imunidade</ProductItemTitle>
              <ProductItemShortTitle>Lavitan</ProductItemShortTitle>
              <ProductDescription>30 Comprimidos Revestidos</ProductDescription>

              <ProductTextPoints>Troque por</ProductTextPoints>
              <ProductPoints>{90} pontos</ProductPoints>
            </ProductItem>

            <ProductItem>
              <ProductItemImage source={imgHypera} />
              <ProductItemTitle>Addera D3 2.000UI</ProductItemTitle>
              <ProductItemShortTitle>Hyper</ProductItemShortTitle>
              <ProductDescription>30 Cápsulas 47.5g</ProductDescription>

              <ProductTextPoints>Troque por</ProductTextPoints>
              <ProductPoints>{90} pontos</ProductPoints>
            </ProductItem>

          </ProductsList>


        </ProductsContainer>

      </Content>
    </Container>
  );
}

export default Products;