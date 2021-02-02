import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Details, Projects, Contact, Footer } from '@components';
import styled from 'styled-components';
import '../styles/global.scss';
import '../styles/reset.css';

const MainContainer = styled.main`
  padding: 0 3rem;
  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer>
        {children}
        <Details />
        <Projects />
      </MainContainer>
      <Contact />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
