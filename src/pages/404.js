import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
`;

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn't exist! Go back <a href="/">home.</a>
    </p>
  </Wrapper>
);

export default NotFoundPage;
