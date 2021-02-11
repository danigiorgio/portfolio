import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { IoLogoGithub } from 'react-icons/io';

const ProjectsContainer = styled.section`
  h3,
  a {
    color: #606bcd;
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  letter-spacing: 0.8px;
  font-weight: 500;
  color: #555;
  margin: 6rem 0;
  @media (max-width: 600px) {
    margin: 5rem 0;
  }
  &:after {
    content: ' ';
    border: 4px solid #747fe0;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    width: 50px;
  }
`;

const StyledContent = styled.div`
  position: relative;
  grid-column: 3 / 6;
  grid-row: 1 / -1;
  @media (max-width: 1100px) {
    grid-column: 1 / 7;
    padding: 20px 10px 0px;
  }
  @media (max-width: 600px) {
    grid-column: 1 / -2;
    padding: 20px 10px 0px;
    z-index: 5;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.6em;
  font-weight: 300;
  margin: 0 24px 20px;
  @media (max-width: 600px) {
    margin: 0 24px 10px;
  }
`;

const ProjectsCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
  transition: all 0.1s ease-out;
  border-radius: 12px;
  border: 13px solid #fff;
  grid-column: 7 / -3;
  grid-row: 1 / -1;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1100px) {
    grid-column: 7 / -1;
    grid-row: 1 / -1;
  }
  @media (max-width: 600px) {
    grid-column: 1 / 13;
    grid-row: 1 / -2;
  }
`;

const Description = styled.div`
  font-size: 0.9em;
  position: relative;
  z-index: 2;
  padding: 25px;
  .ion-github {
    vertical-align: -0.165em;
    margin-left: 8px;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          description
          tools
          url
          github
          img {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <ProjectsContainer id="projects" className="projects">
        <ProjectsTitle>Works</ProjectsTitle>
        {data.allProjectsJson.nodes.map(project => (
          <ProjectsCard key={project.id}>
            <StyledContent>
              <ProjectName>{project.name}</ProjectName>
              <Description>
                <p>{project.description}</p>
                <p>Tools: {project.tools}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoGithub className="ion-github" title="Github" />
                  <span className="screen-reader-only">
                    Github (Opens in a new window)
                  </span>
                </a>
              </Description>
            </StyledContent>
            <ImageContainer className="projects">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Img
                  fluid={project.img.src.childImageSharp.fluid}
                  alt={project.img.alt}
                />
              </a>
            </ImageContainer>
          </ProjectsCard>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
