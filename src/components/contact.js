import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.section`
  background-color: #f5f5f5;
  color: #555;
  padding: 4rem;
  @media (max-width: 500px) {
    padding: 2rem;
  }
  min-height: calc(20vh - 10px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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
    font-weight: 400;
    letter-spacing: 0.8px;
    line-height: 30px;
    @media (max-width: 500px) {
      font-size: 1.2em;
      line-height: 48px;
    }
  }
`

const Contact = () => (
  <ContactContainer id="contact">
    <div>
      <h2>
        Want to work together?{' '}
        <a href="malito:danielagiorgioe@gmail.com">Let's talk.</a>
      </h2>
      <p>
        <span className="pulse"></span>I'm currently open to remote
        opportunities.
      </p>
    </div>
  </ContactContainer>
)

export default Contact
