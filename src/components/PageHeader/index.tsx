import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  LogoBar,
  LogoImage,
  TitleBar,
  TitleBarContent,
  HeaderTitle,
} from './styles';

import imgLogo from '../../assets/images/logo2.png';
import SvgPill from '../../assets/icons/Pill.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <LogoBar>
        <LogoImage source={imgLogo} />
      </LogoBar>

      <TitleBar>
        <TitleBarContent>
          <SvgPill fill="#fff" />
          <HeaderTitle>{title}</HeaderTitle>
        </TitleBarContent>
      </TitleBar>

      <View>
        {children}
      </View>
    </Container>
  );
}

export default PageHeader;