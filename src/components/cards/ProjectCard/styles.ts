import styled, { css } from "styled-components"

interface cardProps {
  isHovered: boolean
}


export const Container = styled.div<cardProps>`
  position: relative;
  max-height: 260px;
  border: 2px solid #1E1E1E;
  border-radius: 8px;
  transition: all .2s ease-in-out;

  ${props => props.isHovered && css`
  transform: scale(1.1);

  `}

`
export const CardInfo = styled.div`
position: absolute;
width: 100%;
height: 260px;
display: flex;
flex-direction: column;
gap: 4rem;
place-items: center;
place-content: center;
top: 0;
z-index: 999;
width: 100%;
height: 100%;
filter: inherit;
pointer-events: none;
overflow: hidden;

  div {
    height: 50px;
    display: flex;

    align-items: center;
    background-color: grey;
  }

  a {
    pointer-events: visiblePainted;
    text-decoration: none;
    font-size: 2rem;
    color: #FFF;
    animation: slideLeft .4s ease-in-out;
    
    :visited {
      color: #FFF;
    }
  
  }

  a + a {
    animation: slideRight .4s ease-in-out;
  }

  .cardIcons {
    font-size: 3rem;
    vertical-align: -6px;
}

@keyframes slideLeft {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
  }
}
`




export const CardContainer = styled.div`
  width: 300px;
  height: 260px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all .2s ease-in-out;

  ${CardInfo}.hovered ~ &{
    transform: scale(1);
    filter: blur(2px) brightness(30%);
  }
  `

export const CardImgContainer = styled.div`
width: 100%;
height: 100%;
`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`

export const CardTitle = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-weight: 400;
`