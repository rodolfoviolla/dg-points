import React, { ReactNode } from 'react';
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

interface PageHeaderProps {
  title: string;
  svgTitle?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, svgTitle, children }) => {
  return (
    <Container>
      <LogoBar>
        <LogoImage source={imgLogo} />
      </LogoBar>

      <TitleBar>
        <TitleBarContent>
          {svgTitle}
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