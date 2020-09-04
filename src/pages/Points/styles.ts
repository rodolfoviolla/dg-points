import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface SvgBackgroundProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const MainCard = styled.View`
  width: 380px;
  height: 232px;
  background-color: #ffffff;
  /* margin-top: -55px; */
  padding: 24px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const MainCardPoints = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 22px;
`;

export const MainCardInfo = styled.View`
  margin-left: 11px;
`;

export const MainCardInfoTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoldTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 28px;
  line-height: 32px;
  color: #494B5B;
`;

export const RegularTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 18px;
  line-height: 22px;
  color: #6D7188;
  margin-left: 4px;
`;

export const MainCardInfoText = styled.Text`
  width: 204px;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  color: #6D7188;
  margin-top: 13px;
`;

export const MainCardFooter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const MainCardButton = styled(RectButton)`
  padding: 16px;
  width: 295px;
  height: 48px;
  background: #FF475A;
  border-radius: 4px;
`;

export const MainCardButtonText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

export const MainCardFooterText = styled.Text`
  margin: 16px 0 0;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-decoration-line: underline;
  color: #6D7188;
  opacity: 0.8;
`;

export const Content = styled.View`
  width: 380px;
  padding: 37px 0;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`;

export const ContentTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 18px;
  line-height: 22px;
  color: #494B5B;
`;

export const SvgBackgroundTitle = styled.View<SvgBackgroundProps>`
  border-radius: 50px;
  height: 32px;
  width: 32px;

  background-color: ${({ color }) => color};
`;

export const Card = styled.View`
  margin-bottom: 8px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const SvgBackground = styled.View<SvgBackgroundProps>`
  border-radius: 50px;
  height: 32px;
  width: 32px;
  margin: 30px 0 30px 16px;

  background-color: ${({ color }) => color};
`;

export const CardContent = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const CardContentTitle = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: 16px;
  line-height: 20px;
  color: #494B5B;
`;

export const CardContentText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  color: #6D7188;
  opacity: 0.88;
  margin-top: 8px;
`;

export const CardStatus = styled.View`
  background: #DBDCE5;
  border-radius: 50px;
  height: 4px;
  width: 231px;
  margin-top: 2px;
`;