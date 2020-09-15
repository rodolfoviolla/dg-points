import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

interface SvgBackgroundProps {
  disabled?: boolean;
}

interface PaginatorProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  height: 90px;
`;

export const Logo = styled.Image`
  width: 168px;
  height: 32px;
`;

export const ScrollScreenContainer = styled.View`
  height: 100%;
  width: ${Dimensions.get('window').width}px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
`;

export const Image = styled.Image`
  width: 284px;
  height: 212px;
`;

export const Title = styled.Text`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 28px;
  line-height: 36px;
  color: #494B5B;
  margin: 40px 0 16px;
`;

export const Description = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #6D7188;
  width: 293px;
  text-align: center;
`;

export const DescriptionSpan = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
`;

export const DescriptionSpanRed = styled.Text`
  font-family: 'GT-Walsheim-Pro-Medium';
  color: #FF475A;
`;

export const Footnote = styled.View`
  width: 100%;
  align-items: center;
`;

export const FootnoteText = styled.Text`
  width: 220px;
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 12px;
  line-height: 16px;
  color: #6D7188;
  opacity: 0.64;
  text-align: center;
`;

export const Footer = styled.View`
  height: 106px;
  padding: 24px 16px;
`;

export const FooterTop = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SvgBackground = styled.View<SvgBackgroundProps>`
  width: 40px;
  height: 40px;
  border-radius: 4px;

  ${({ disabled }) => !disabled && css`
    background: rgba(255, 71, 90, 0.16);
  `}

  align-items: center;
  justify-content: center;
`;

export const Paginator = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaginatorIndicator = styled.View<PaginatorProps>`
  width: ${({ selected }) => selected ? 28 : 8}px;
  opacity: ${({ selected }) => selected ? 1 : 0.32};

  height: 8px;
  background: #FF475A;
  border-radius: 50px;
  margin: 0 8px;
`;

export const FooterBottom = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FooterBottomText = styled.Text`
  font-family: 'GT-Walsheim-Pro-Regular';
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-decoration-line: underline;
  color: #6D7188;
  opacity: 0.8;
`;
