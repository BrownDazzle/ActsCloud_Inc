import React from 'react';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import SocialLink from '../utils/SocialLink';
import { socialLinks } from '../../data';

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+260-973-302063">+260-973-302063</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:actscloud28@gmail.com">
          actscloud28@gmail.com
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Address</LinkTitle>
        <LinkItem href="">
          18/80 Chipata O/S,Lusaka
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Building the Tech industry one innovation at a time.</Slogan>
      </CompanyContainer>
      <SocialContainer>
        {socialLinks.map((links, i) => (<SocialLink icon={links.icon} link={links.link} key={i} />))}
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);

export default Footer;
