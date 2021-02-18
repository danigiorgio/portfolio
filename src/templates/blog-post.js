import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Nav from '../components/header';
import Footer from '../components/footer';

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <>
      <Nav />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          // flexWrap: `wrap`,
          justifyContent: `center`,
          listStyle: `none`,
          padding: `0 14rem`,
          margin: `0 auto`,
        }}>
        <Image
          fluid={frontmatter.image.childImageSharp.sizes}
          alt={frontmatter.title}
        />
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <p>{frontmatter.description}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Footer />
    </>
  );
};
