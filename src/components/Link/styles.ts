import styled, { css } from "styled-components";

interface LinkProps {
  active?: boolean
}

export const LinkNav = styled.a<LinkProps>`
font-family: 'Inter', sans-serif;
font-size: 1.6rem;
color: #ffffff;
cursor: pointer;
position: relative;
text-decoration: underline;
text-decoration-thickness: 0.2rem;
text-underline-offset: 0.4rem;
transition: color .2s;

:hover {
  color: ${props => props.theme['blue-100']};
}

${props => props.active && css`
  color: ${props => props.theme['blue-100']};
`}
`