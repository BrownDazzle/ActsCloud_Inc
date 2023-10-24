import React from 'react';
//import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, SocialIcons } from './FooterStyles';
import { socials } from '../../constants';
import SocialLink from '../utils/SocialLink';
import { socialLinks } from '../../data';

const Footer = () => {
  return (
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
          {/*<SocialIcons href="">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="">
            <AiFillInstagram size="3rem" />
  </SocialIcons>*/}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
