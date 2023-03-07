import { Header } from "../../components/Header";
import { About } from "../../components/sections/About";
import { Contact } from "../../components/sections/Contact";
import { Knowledge } from "../../components/sections/Knowledge";
import { Projects } from "../../components/sections/Projects";
import { LandingContainer } from "./styles";

export function Landing() {
  return (
    <>
      <Header />
      <LandingContainer>
        <About />
        <Knowledge />
        <Projects />
        <Contact />
      </LandingContainer>
    </>
  )
}