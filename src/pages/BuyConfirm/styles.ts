import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const MainSection = styled.View`
  /* margin-bottom: 32px; */
`;

export const Title = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 18px;
  line-height: 22px;
  color: #333847;
`;

export const PointsSection = styled.View`
  padding: 24px 0;

  border-bottom-width: 2px;
  border-bottom-color: #DBDCE5;
`;

export const PointsItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #6D7188;
`;

export const PointsTotal = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 16px;
  line-height: 20px;
  color: #FF475A;
`;

export const PointsAfter = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 16px;
  line-height: 20px;
  color: #333847;
`;

export const AdressSection = styled.View`
  padding: 24px 0;

  border-bottom-width: 2px;
  border-bottom-color: #DBDCE5;
`;

export const Adress = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #494B5B;
  margin: 8px 0 4px;
`;

export const AdressEdit = styled.TouchableOpacity`

`;

export const AdressEditText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #A30010;
`;

export const DeliverySection = styled.View`
  padding: 24px 0;
`;

export const DeliveryTotal = styled.View`
  padding: 8px 0 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryTotalValue = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 16px;
  line-height: 20px;
  color: #494B5B;
`;

export const DeliveryDisclaimer = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #6D7188;
`;

export const DeliverySpan = styled.Text`
  text-decoration-line: underline;
  color: #A30010;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
  width: 100%;
`;