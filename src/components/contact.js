import React, { useState } from 'react';
import styled from 'styled-components';
import { FiCopy } from 'react-icons/fi';

const ContactContainer = styled.section`
  color: #555;
  background: #f5f5f5;
  padding: 4.5rem;
  svg {
    font-size: 15px;
    cursor: pointer;
  }
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
`;
const Email = styled.span`
  color: #7e88ff;
`;

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Email address copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <ContactContainer id="contact">
      <h2>Want to work together? </h2>
      <p>
        <span className="pulse" />
        I&apos;m currently open to remote opportunities.
      </p>
      <p>
        Drop me a line at <Email>hello@danielagiorgio.com</Email>{' '}
        <FiCopy
          title="Copy email address"
          onClick={() => copyToClipBoard('hello@danielagiorgio.com')}
        />
      </p>

      {copySuccess}
    </ContactContainer>
  );
};

export default Contact;
