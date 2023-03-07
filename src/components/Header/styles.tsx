import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  padding: 0 1.6rem;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;

background-image: linear-gradient(0deg, #00FFFF00 0%, #070707BF 80%);
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.span`
  font-family: 'Audiowide', cursive;
  font-size: 2.4rem;
  color: #ffffff;
`

export const NavBar = styled.nav`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
