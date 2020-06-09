import React from 'react'
import styled from 'styled-components'
import {
  IoMdMail,
  IoLogoGithub,
  IoLogoCodepen,
  IoLogoLinkedin,
} from 'react-icons/io'

const FooterContainer = styled.footer`
  text-align: center;
  color: #686868;
  background: #f5f5f5;
  padding-bottom: 1.2rem;
`

const SocialLinks = styled.div`
  padding-bottom: 1.1rem;
  svg {
    font-size: 2.7em;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    :hover {
      color: #555;
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  a {
    margin: 0 1.4rem;
    @media (max-width: 600px) {
      margin: 0 0.9rem;
    }
  }
  span {
    color: #555;
  }
`

const CopyRight = styled.p`
  font-size: 0.8em;
  .gatsby {
    color: #555;
  }
`

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <a
        href="mailto:danielagiorgioe@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoMdMail title="Email" />
      </a>
      <a
        href="https://github.com/voirs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub title="Github" />
      </a>
      <a
        href="https://codepen.io/voirs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoCodepen title="Codepen" />
      </a>
      <a
        href="https://linkedin.com/in/danielagiorgio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin title="Linkedin" />
      </a>
    </SocialLinks>
    <CopyRight>
      © {new Date().getFullYear()}, designed and developed by Daniela Giorgio —
      Powered by{' '}
      <a
        className="gatsby"
        href="https://gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
      ,{' '}
      <span title="Russian post punk" role="img" aria-label="music note">
        🎵
      </span>{' '}
      and{' '}
      <span title="Green tea and coffee" role="img" aria-label="hot beverage">
        ☕
      </span>
    </CopyRight>
  </FooterContainer>
)

export default Footer
