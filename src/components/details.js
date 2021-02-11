import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const DetailsContainer = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 10rem 0;
`;

const Console = styled.div`
  height: 550px;
  @media (max-width: 600px) {
    height: 580px;
  }
  width: 100%;
  background: #414358;
  border-radius: 8px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
    rgba(0, 0, 0, 0.23) 0px 6px 10px;
`;

const ConsoleHeader = styled.div`
  background: #cfd8dc;
  height: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const Button = styled.div`
  width: 10px;
  height: 10px;
  float: left;
  border-radius: 50%;
  margin-left: 5px;
`;

const Buttons = styled.div`
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  .btn1 {
    background-color: #f96256;
  }
  .btn2 {
    background-color: #fdbc3d;
  }
  .btn3 {
    background-color: #33c948;
  }
`;
const ConsoleContent = styled.div`
  font-family: monospace;
  margin: 1.8rem;
  .resume {
    color: #d2a0ff;
  }
  p {
    margin: 0.8rem 0;
  }
  p:nth-child(odd) {
    color: #f3ba4b;
  }
  p:nth-child(even) {
    color: #ffeddb;
  }
  .cursor {
    -webkit-animation: blink 1s 8.5s infinite;
    -moz-animation: blink 1s 8.5s infinite;
    -o-animation: blink 1s 8.5s infinite;
    animation: blink 1s 8.5s infinite;
  }
`;

const Details = () => {
  const data = useStaticQuery(graphql`
    query {
      allDetailsJson {
        nodes {
          id
          location
          email
          resume
          interests
          skills
        }
      }
    }
  `);
  return (
    <>
      <DetailsContainer id="about">
        {data.allDetailsJson.nodes.map(detail => (
          <Console key={detail.id} className="console">
            <ConsoleHeader>
              <Buttons>
                <Button className="btn1" />
                <Button className="btn2" />
                <Button className="btn3" />
              </Buttons>
            </ConsoleHeader>

            <ConsoleContent>
              <p>&gt; Daniela.currentLocation</p>
              <p>{detail.location}</p>
              <p>&gt; Daniela.contactInfo</p>
              <p>{detail.email}</p>
              <p>&gt; Daniela.resume</p>

              <p>
                <a href="resume.pdf" className="resume">
                  {detail.resume}
                </a>
              </p>

              <p>&gt; Daniela.skills</p>
              <p>{detail.skills}</p>
              <p>&gt; Daniela.interests</p>
              <p>{detail.interests}</p>
              <p>
                &gt;<span className="cursor"> _</span>
              </p>
            </ConsoleContent>
          </Console>
        ))}
      </DetailsContainer>
    </>
  );
};

export default Details;
