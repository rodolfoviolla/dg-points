import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px 16px 0;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    paddingVertical: 30,
  },
  showsVerticalScrollIndicator: false,
})``;

export const CategoriesContainer = styled.View`
  width: 100%;
  padding-bottom: 32px;
`;

export const CategoriesHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CategoriesTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 18px;
  line-height: 22px;
  color: #494B5B;
`;

export const CategoriesMore = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 14px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #EB0017;
`;

export const CategoriesList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CategoryItem = styled.View`
  align-items: center;
  justify-content: center;

  margin-right: 8px;
  width: 104px;
  height: 100px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  border-bottom-width: 2px;
  border-bottom-end-radius: 4px;
  border-bottom-color: #A30010;
`;

export const CategoryImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CategoryText = styled.Text`
  width: 84px;
  height: 36px;

  padding: 4px 10px 0;

  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  color: #333847;

  display: flex;
  align-items: center;
  text-align: center;
`;

export const ProductsContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const ProductsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductsTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 18px;
  line-height: 22px;
  color: #494B5B;
`;

export const ProductsList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ProductItem = styled.View`
  align-items: center;
  padding: 16px;
  width: 167px;
  height: 284px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-right: 9px;
`;

export const ProductItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductItemTitle = styled.Text`
  height: 36px;
  width: 100%;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  color: #333847;
  margin: 8px 0;
  text-align: left;
`;

export const ProductItemShortTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 14px;
  line-height: 18px;
  color: #333847;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.Text`
  height: 24px;
  width: 100%;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 12px;
  line-height: 12px;
  color: #6D7188;
  text-align: left;
  margin-bottom: 32px;
`;

export const ProductTextPoints = styled.Text`
  width: 100%;
  height: 18px;
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 14px;
  line-height: 18px;
  color: #6D7188;
  text-align: left;
`;

export const ProductPoints = styled.Text`
  width: 100%;
  height: 20px;
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 16px;
  line-height: 20px;
  color: #FF475A;
  text-align: left;
`;
