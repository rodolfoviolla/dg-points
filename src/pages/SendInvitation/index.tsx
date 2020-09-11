import React from 'react';

import SvgEmail from '../../assets/icons/Email.svg';
import SvgWhatsapp from '../../assets/icons/Whatsapp.svg';
import SvgBubble from '../../assets/icons/Bubble.svg';
import SvgChevronRight from '../../assets/icons/Chevron-Right.svg';

import { 
  Container,
  Title,
  Options,
  Item,
  DescriptionContainer,
  Description,
} from './styles';

const SendInvitation: React.FC = () => {
  return (
    <Container>
      <Title>Como você quer indicar um amigo?</Title>

      <Options>
        <Item>
          <DescriptionContainer>
            <SvgEmail fill="#494b5b"/>
            <Description>E-mail</Description>
          </DescriptionContainer>
          <SvgChevronRight fill="#6D7188"/>
        </Item>

        <Item>
          <DescriptionContainer>
            <SvgWhatsapp fill="#494b5b"/>
            <Description>Whatsapp</Description>
          </DescriptionContainer>
          <SvgChevronRight fill="#6D7188"/>
        </Item>

        <Item>
          <DescriptionContainer>
            <SvgBubble fill="#494b5b"/>
            <Description>Mensagem (SMS)</Description>
          </DescriptionContainer>
          <SvgChevronRight fill="#6D7188"/>
        </Item>

      </Options>
    </Container>
  );
}

export default SendInvitation;