import styled from "styled-components"

export const CardContainer = styled.div`
  width: 300px;
  height: 260px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 2px solid #1E1E1E;
  border-radius: 8px;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

export const CardImgContainer = styled.div`

`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`

export const CardTitle = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-weight: 400;
`