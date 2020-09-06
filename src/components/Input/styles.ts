import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px 16px;
  
  height: 48px;
  width: 344px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #FFFFFF;
  border: 1px solid #EDEEF2;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #333847;
`;