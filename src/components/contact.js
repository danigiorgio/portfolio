import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.section`
  color: #555;
  background: #f5f5f5;
  padding: 4.5rem;
  @media (max-width: 500px) {
    padding: 2rem;
  }
  min-height: calc(20vh - 10px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  a {
    font-weight: 300;
  }
  p {
    text-align: center;
    @media (max-width: 500px) {
      font-size: 0.9em;
    }
  }
  .pulse {
    background-color: #747fe0;
    display: inline-block;
    vertical-align: middle;
    margin: 0 12px 3px 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-clip: padding-box;
    box-shadow: 0 0 0 rgba(133, 155, 255, 0.699);
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
  }
  h2 {
    font-size: 1.8em;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 1.5em;
    }
  }
`
const ButtonCta = styled.button`
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: .025em;
    -moz-letter-spacing: .025em;
    letter-spacing: .025em;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
    padding: .5rem 1rem;
    background-image: linear-gradient(90deg,#7e88ff,#827affbd);
    box-shadow: 0 2px 8px 0 rgba(0,34,255,.08), 0 2px 8px 0 rgba(0,11,80,.12);
    &:hover {
      background-image: linear-gradient(90deg,#827affbd,#7e88ff);
    }
}
`

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Want to work together? </h2>
    <p>
      <span className="pulse"></span>I'm currently open to remote opportunities.
    </p>
    <a href="malito:danielagiorgioe@gmail.com">
      {' '}
      <ButtonCta>Get in touch</ButtonCta>
    </a>
  </ContactContainer>
)

export default Contact
