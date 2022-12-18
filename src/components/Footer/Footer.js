import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:electronicswshopify@gmail.com">electronicswshopify@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Time Can Buy Money, But Money Can't But Time"</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/NaTe2007/NaTe2007">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons  href="https://Instagram.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/@naftalimelman1966/featured">
          <AiFillYoutube size={"3rem"}></AiFillYoutube>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
