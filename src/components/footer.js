import React from 'react'
import styled from 'styled-components'
import {
  FiMail,
  FiGithub,
  FiCodepen,
  FiLinkedin,
  FiMusic,
  FiCoffee,
} from 'react-icons/fi'

const FooterContainer = styled.footer`
  text-align: center;
  color: #686868;
  background: #f5f5f5;
  padding-bottom: 1.2rem;
`

const SocialLinks = styled.div`
@media (min-width: 1100px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 60px;
    }
  svg {
    color #555;
    font-size: 1.1em;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    @media (max-width:1100px) {
      font-size: 1.4em;
      margin: 2rem 1rem 0 0;
      color: #747fe0;
    }
    :hover {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  a {
    margin: 0.9rem 0;   
  }
  span {
    color: #555;
  }
  &:after {
    content: "";
    width: 1px;
    height: 90px;
    background-color: gray;
  }
`

const CopyRight = styled.p`
  font-size: 0.8em;
  padding-top: 1rem;
  .gatsby {
    color: #555;
  }
  svg {
    vertical-align: middle;
  }
`

const Footer = () => (
  <FooterContainer>
    <SocialLinks className="social">
      <a
        href="mailto:hello@danielagiorgio.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail title="Email" />
      </a>
      <a
        href="https://github.com/voirs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub title="Github" />
      </a>
      <a
        href="https://codepen.io/voirs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiCodepen title="Codepen" />
      </a>
      <a
        href="https://linkedin.com/in/danielagiorgio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin title="Linkedin" />
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
        <FiMusic />
      </span>{' '}
      and{' '}
      <span title="Green tea and coffee" role="img" aria-label="hot beverage">
        <FiCoffee />
      </span>
    </CopyRight>
  </FooterContainer>
)

export default Footer
