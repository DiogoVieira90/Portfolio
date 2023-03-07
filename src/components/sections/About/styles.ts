import styled from "styled-components";

export const SectionAboutContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  /* border: 1px solid red; */
  padding-top: 6.8rem;
  display: flex;
  align-items: center;
  position: relative;
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutName = styled.h1`
  font-size: 8.2rem;
  font-family: 'Russo One', sans-serif;
`

export const AboutRole = styled.span`
  font-size: 6.4rem;
  font-family: 'Iceland', cursive;
  margin: 1.2rem 0;

  background: ${props => props.theme['grad-100']};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const AboutParagraph = styled.p`
  font-size: 1.8rem;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 2.8rem;
`

export const AboutImg = styled.img`
  position: absolute;
  z-index: -10;
  left: 40%;
`