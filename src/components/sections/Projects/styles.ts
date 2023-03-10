import styled, { css } from "styled-components";


export const SectionProjectsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  /* border: 1px solid red; */
  padding-top: 14.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  position: relative;

  & div.shadow {
    position: relative;
    height: 76%;
    display: flex;

    span.shadowTop {
      position: absolute;
      top: 0;
      z-index: 10;
      width: 95%;
      height: 20px;
      background-image: linear-gradient(180deg, #000000 0%, #073AFF00 100%);
      pointer-events: none;
    }

    span.shadowBottom {
      position: absolute;
      bottom: 0;
      z-index: 10;
      width: 95%;
      height: 20px;
      background-image: linear-gradient(0deg, #000000 0%, #073AFF00 100%);
      pointer-events: none;
    }
  }

`

export const ProjectsContainer = styled.div`
  padding: 2.4rem 8.2rem;
  position: relative;
  overflow-y: scroll;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.2rem;
  



  ::-webkit-scrollbar {
    width: 12px;
    z-index: 900;

  }

  ::-webkit-scrollbar-track {
    border-radius: 35px;
    border: 2px solid ${props => props.theme['blue-100']};
    z-index: 900;

  }

  ::-webkit-scrollbar-thumb {
    border-radius: 35px;
    background: ${props => props.theme['blue-100']};
    z-index: 900;

  }
`

