import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';

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
      You just hit a route that doesn&apos;t exist! Go back
      <a href="/">home.</a>
    </p>
  </Wrapper>
);

export default NotFoundPage;
