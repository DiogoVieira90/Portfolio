import { AboutImg, AboutName, AboutParagraph, AboutRole, AboutTextContainer, SectionAboutContainer } from "./styles";

import Foto from '../../../assets/foto.jpg'

export function About() {
  return (
    <SectionAboutContainer id="about">
      <AboutImg src={Foto} alt="" />
      <AboutTextContainer>
        <AboutName>Diogo Vieira</AboutName>
        <AboutRole>Web Developer</AboutRole>
        <AboutParagraph>
          Desenvolvedor web com conhecimento em React,<br />
          TypeScript e design. Sou uma pessoa detalhista<br />
          que cria soluções personalizadas e elegantes<br />
          com equilíbrio entre funcionalidade e estética.
          {/* Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit. Suspendisse scelerisque<br />
          aliquet odio facilisis consequat. Nulla<br />
          facilisi. Suspendisse mauris diam, varius quis */}
        </AboutParagraph>
      </AboutTextContainer>
    </SectionAboutContainer>
  )
}