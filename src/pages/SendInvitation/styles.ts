import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 18px;
  color: #333847;
`;

export const Options = styled.View`
  margin-top: 34px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 20px;
  color: #6D7188;
  margin-left: 8px;
`;