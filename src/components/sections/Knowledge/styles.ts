import styled, { css } from "styled-components";
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiNextdotjs, SiNodedotjs, SiStyledcomponents } from "react-icons/si";

interface IconProps {
  ishover: boolean
}

export const SectionKnowledgeContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  padding-top: 14.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  position: relative;
  `

export const KnowledgeContainer = styled.div`
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  gap: 4.2rem;
  /* border: 1px solid white; */
  
`

export const IconsContainer = styled.div<IconProps>`
  position: relative;
  width: 480px;
  height: 480px;
  display: flex;
  place-items: center;
  justify-content: center;
  transform-origin: center;
  /* border: 1px solid white; */
  border-radius: 50%;
  animation: orbit 15s infinite linear;

  ${props => props.ishover && css`
  animation-play-state: paused;
`}

  /* :hover {
    animation-play-state: paused;
  } */

  @keyframes orbit {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  `
export const DivEffect = styled.div`
    position: absolute;
    width: 580px;
    height: 580px;
    background: conic-gradient(from 0deg at 54.27% 54.37%,
      #ff0000 0deg, #ff9300 36deg, #f4fe01 72deg,
      #31fd02 108deg, #03fc73 144deg, #04fbf0 180deg,
      #045bfa 216deg, #8f04f9 252deg, #f904eb 288deg, #f60670 324deg, #ff0000 360deg);
    mix-blend-mode: darken;
    pointer-events: none;
    border-radius: 50%;
  animation: orbit 5s infinite linear reverse;

`

export const IconTitle = styled.span`
  font-family: 'Audiowide', cursive;
  color: #FFF;
  font-size: 3rem;
  position: absolute;
`

export const ReactIcon = styled(SiReact) <IconProps>`
  font-size: 42px;
  position: absolute;
  top: 0%;
  transform-origin: center !important;
  animation: orbit 10s infinite linear reverse;
  transition: all 0.3s;
 
  :hover {
    font-size: 74px;
  }
  
  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`
export const TsIcon = styled(SiTypescript) <IconProps>`
  font-size: 42px;
  position: absolute;
  top: 15%;
  right: 15%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`
export const TailIcon = styled(SiTailwindcss) <IconProps>`
  font-size: 42px;
  position: absolute;
  top: 45%;
  right: 0%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`

export const NodeIcon = styled(SiNodedotjs) <IconProps>`
  font-size: 42px;
  position: absolute;
  bottom: 0%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`
export const HtmlIcon = styled(SiHtml5) <IconProps>`
  font-size: 42px;
  position: absolute;
  bottom: 15%;
  right: 15%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`

export const NextIcon = styled(SiNextdotjs) <IconProps>`
  font-size: 42px;
  position: absolute;
  bottom: 15%;
  left: 15%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`
export const StyledIcon = styled(SiStyledcomponents) <IconProps>`
  font-size: 42px;
  position: absolute;
  top: 45%;
  left: 0%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`
export const JsIcon = styled(SiJavascript) <IconProps>`
  font-size: 42px;
  position: absolute;
  top: 15%;
  left: 15%;
  animation: orbit 15s infinite linear reverse;
  transition: all 0.3s;
 
 :hover {
   font-size: 74px;
 }

  ${props => props.ishover && css`
  animation-play-state: paused;
`}
`