import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'animate.css'

const AboutContainer = styled.div`
  min-height: calc(80vh - 10px);
  width: 88%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 7rem;
  @media (max-width: 1100px) {
    padding: 0 4rem;
  }
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`

const AboutDescription = styled.h1`
  color: #555;
  font-size: 1.8em;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 68px;
  @media (max-width: 500px) {
    font-size: 1.5em;
    line-height: 45px;
  }
`

const WavingHand = styled.span`
  background-image: url(https://i.imgur.com/qEBvURg.png);
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: text-top;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: wave 0.3s;
  animation-iteration-count: 7;
  &:hover {
    cursor: pointer;
    animation: wave 0.3s;
    animation-iteration-count: 5;
    -webkit-animation-fill-mode: both;
  }
`

const About = () => (
  <AboutContainer>
    <AboutDescription className="animate__animated animate__fadeInUp">
      Hello! <WavingHand role="img" aria-label="waving hand"></WavingHand> I'm
      Daniela Giorgio. I am a <Link to="/#about">frontend developer</Link>,
      based in Buenos Aires, Argentina. Check out my{' '}
      <Link to="/#projects">side-projects</Link> below.
    </AboutDescription>
  </AboutContainer>
)

export default About
