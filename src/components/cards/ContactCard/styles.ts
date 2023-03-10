import styled from "styled-components"

export const CardContainer = styled.div`
  position: relative;
  width: 220px;
  height: 260px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all .2s ease-in-out;
  
  ::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px; 
  padding: 2px; 
  background: linear-gradient(90deg, #00E5FF 0%, #3253FF 50%, #00E5FF 100%);; 
  -webkit-mask: 
  linear-gradient(#fff 0 0) content-box, 
  linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: bgParallax infinite 4s linear;
}
  :hover {
    transform: scale(1.1);
  }

  @keyframes bgParallax {
    100% {
      background-position: 220px;
    }
  }
`

export const CardImgContainer = styled.div`

`

export const CardImg = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`

export const CardTitle = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-weight: 400;
`