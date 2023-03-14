import styled, { css } from "styled-components";

interface buttonProps {
  active: number
}


export const SectionProjectsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  /* border: 1px solid red; */
  padding-top: 12.4rem;
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
  padding: 3.2rem 8.2rem;
  position: relative;
  overflow-y: scroll;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.4rem;
  



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



export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 2.4rem;

  

  input {
    width: 160px;
    border-radius: 50px;
    background: 
    linear-gradient(#070707, #070707) padding-box,
    linear-gradient(90deg, #00E5FF, #3253FF) border-box;
    color: #FFF;
    padding: 0rem;
    padding-left: 14px;
    border: 2px solid transparent;
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 16px;

    &::placeholder {
      font-family: 'IBM Plex Mono';
      font-style: italic;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 16px;
      opacity: 0.8;
    }

    &:focus {
      outline: #00E5FF !important;
      box-shadow: 0 0 6px #00E5FF;
    }
  }
`

export const FilterButton = styled.button<buttonProps>`
    width: 36px;
    height: 36px;
    background: 
    linear-gradient(#070707, #070707) padding-box,
    linear-gradient(90deg, #00E5FF, #3253FF) border-box;
    color: #FFF;
    padding: 0rem;
    border: 2px solid transparent;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.6;
    transition: all .2s ease-in-out;


    &:focus {
      outline: #00E5FF !important;
      box-shadow: 0 0 6px #00E5FF;
    }

    ${props => props.active === 1 && css`
      opacity: 1;
    `}


      span {
        font-family: 'IBM Plex Mono';
        font-style: italic;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        background: linear-gradient(90deg, #00E5FF 0%, #3253FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparen
      } 
`