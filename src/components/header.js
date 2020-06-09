import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import DarkModeToggle from './darkmode'
import About from './about'
import styled from 'styled-components'
import 'animate.css'

const HeaderContainer = styled.header`
  height: 100%;
`

const NavContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
`

const Logo = styled.div`
  position: absolute;
  left: 110px;
  top: 35px;
  @media (max-width: 1100px) {
    left: 55px;
  }
  @media (max-width: 600px) {
    left: 25px;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

const ListItem = styled.li`
  padding: 35px 80px 0 10px;
  font-size: 1.1rem;
  a:hover {
    padding-bottom: 8px;
    border-bottom: 2px solid #ddd;
  }
  @media (max-width: 1000px) {
    padding: 36px 50px 0 0px;
  }
  @media (max-width: 600px) {
    padding: 36px 28px 0 6px;
  }
`

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/" rel="noopener">
          <Logo className="animate__animated animate__jello">
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt="Logo of letter D"
              title="Logo" className="logo"
            ></Img>
          </Logo>
        </Link>
        <List>
          <ListItem className="link">
            <Link to="/#projects">Work</Link>
          </ListItem>
          <ListItem className="link">
            <Link to="/#contact">Contact</Link>
          </ListItem>
        </List>

        <DarkModeToggle />
      </NavContainer>

      <About />
    </HeaderContainer>
  )
}
