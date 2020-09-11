import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  background: #E5E5E5;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 90px;
  background: #A30010;
  align-items: center;
`;

export const HeaderLogo = styled.Image`
  width: 98px;
  height: 34px;
  margin: 43px 0 13px;
`;

export const Welcome = styled.View`
  margin: 24px 0 24px 16px;
`;

export const WelcomeTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  line-height: 16px;
  font-size: 14px;
`;

export const WelcomeText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 16px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CardMain = styled.View`
  margin: 0 15px 48px;
  flex-direction: row;

  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

export const CardMainImage = styled.Image`

`;

export const CardMainContent = styled.View`
  flex: 1;
  padding: 16px;
`;

export const CardMainFrame = styled.Text`
  background: rgba(255, 71, 90, 0.16);
  border-radius: 2px;
  padding: 4px 8px 2px;
  text-align: center;
  width: 64px;

  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 10px;
  line-height: 14px;
  color: #EB0017;
`;

export const CardMainTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 18px;
  line-height: 22px;
  color: #FF475A;

  padding: 10px 0 8px;
`;

export const CardMainText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  color: #494B5B;
  font-size: 14px;
  line-height: 22px;
`;