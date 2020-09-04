import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: center;
  background: #E5E5E5;
`;

export const Header = styled.View`
  height: auto;
  background: #A30010;
  align-items: center;
  justify-content: center;
  padding: 60px 0 20px 0;
`;

export const HeaderLogo = styled.Image`
  
`;

export const Welcome = styled.View`
  margin: 24px 0 24px 16px;
`;

export const WelcomeTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
`;

export const WelcomeText = styled.Text`
  font-family: Roboto;
  font-size: 14px;
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
  padding: 4px 8px;
  text-align: center;
  width: 62px;

  font-family: Roboto;
  font-size: 10px;
  font-weight: bold;
  color: #EB0017;
  
  align-items: center;
  justify-content: center;
`;

export const CardMainTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  color: #FF475A;

  padding: 10px 0;
`;

export const CardMainText = styled.Text`
  font-family: Roboto;
  color: #494B5B;
  font-size: 14px;
  line-height: 22px;
`;

export const CardMainButton = styled(RectButton)`
  background: #FF475A;
  border-radius: 4px;
  height: 48px;

  align-items: center;
  justify-content: center;

  margin: 8px 0 0;
`;

export const CardMainButtonText = styled.Text`
  font-family: Roboto;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
`;