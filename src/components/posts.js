import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`;

const Posts = () => {
  const data = useStaticQuery(graphql`
    query SITE_INDEX_QUERY {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return (
    <>
      {/* <StyledContainer>
        <Title>Blog</Title>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <div>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </div>
        ))}
      </StyledContainer> */}
    </>
  );
};
export default Posts;
