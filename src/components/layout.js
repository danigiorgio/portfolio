import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Details from './details'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'
import styled from 'styled-components'
import '../styles/global.scss'
import '../styles/reset.css'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const MainContainer = styled.main`
  padding: 0 3rem;
  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
