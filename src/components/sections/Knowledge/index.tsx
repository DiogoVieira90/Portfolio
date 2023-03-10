import { useState } from "react";
import { Separator } from "../../Separator";
import { Title } from "../../Title";
import { DivEffect, HtmlIcon, IconsContainer, IconTitle, JsIcon, KnowledgeContainer, NextIcon, NodeIcon, ReactIcon, SectionKnowledgeContainer, StyledIcon, TailIcon, TsIcon } from "./styles";


export function Knowledge() {

  const [isHover, setIsHover] = useState(false)
  const [title, setTtitle] = useState('')

  function handleMouseOver(title: string) {
    setIsHover(true)
    setTtitle(title)
  }

  return (
    <SectionKnowledgeContainer id="knowledge">
      <Title>KNOWLEDGE</Title>
      <Separator />
      <KnowledgeContainer>

        <IconsContainer ishover={isHover}>
          <ReactIcon ishover={isHover} onMouseEnter={() => handleMouseOver('REACT JS')} onMouseLeave={() => setIsHover(false)} />
          <TsIcon ishover={isHover} onMouseEnter={() => handleMouseOver('TYPESCRIPT')} onMouseLeave={() => setIsHover(false)} />
          <TailIcon ishover={isHover} onMouseEnter={() => handleMouseOver('TAILWIND')} onMouseLeave={() => setIsHover(false)} />
          <HtmlIcon ishover={isHover} onMouseEnter={() => handleMouseOver('HTML 5')} onMouseLeave={() => setIsHover(false)} />
          <NodeIcon ishover={isHover} onMouseEnter={() => handleMouseOver('NODE JS')} onMouseLeave={() => setIsHover(false)} />
          <NextIcon ishover={isHover} onMouseEnter={() => handleMouseOver('NEXT JS')} onMouseLeave={() => setIsHover(false)} />
          <StyledIcon ishover={isHover} onMouseEnter={() => handleMouseOver('STYLED COMP.')} onMouseLeave={() => setIsHover(false)} />
          <JsIcon ishover={isHover} onMouseEnter={() => handleMouseOver('JAVASCRIPT')} onMouseLeave={() => setIsHover(false)} />

        </IconsContainer>

        <DivEffect />
        {
          isHover && <IconTitle>{title}</IconTitle>
        }
      </KnowledgeContainer>
    </SectionKnowledgeContainer>
  )
}