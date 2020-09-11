import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;
  padding: 23px 23px 0;
  background-color: #FF475A;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.Image`
  width: 98px;
  height: 34px;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductSection = styled.View`
  padding: 32px 16px;
  background: #FFFFFF;
  align-items: center;
  margin-bottom: 24px;
  text-align: left;
`;

export const ProductImage = styled.Image`
  width: 148px;
  height: 148px;
`;

export const ProductTitle = styled.Text`
  width: 100%;
  margin: 16px 0;

  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #333847;
`;

export const ProductInfo = styled.View`
  width: 100%;
  text-align: left;
  flex-direction: row;
`;

export const ProductShortTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 14px;
  line-height: 19px;
  color: #333847;
  margin-right: 16px;
`;

export const ProductDescription = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 19px;
  color: #6D7188;
`;

export const DetailSection = styled.View`
  padding: 32px 16px;
  background: #FFFFFF;
  align-items: center;
  margin-bottom: 8px;
  text-align: left;
`;

export const SectionTitle = styled.Text`
  width: 100%;
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 14px;
  line-height: 20px;
  color: #333847;
  margin-bottom: 16px;
`;

export const ProductDetails = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #333847;
`;

export const FeatureSection = styled.View`
  padding: 32px 16px;
  background: #FFFFFF;
  align-items: center;
  margin-bottom: 8px;
  text-align: left;
`;

export const ProductFeature = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FeatureTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #6D7188;
`;

export const FeatureDescription = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #333847;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  background: #FFFFFF;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.08);
  padding: 16px;

  border-top-width: 0.5px;
  border-top-color: rgba(0, 0, 0, 0.08);
`;

export const FooterDetails = styled.View`
  
`;

export const FooterDetailsText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #6D7188;
`;

export const FooterDetailsPoints = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 18px;
  line-height: 22px;
  color: #FF475A;
`;
