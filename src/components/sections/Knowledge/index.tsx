import { useState } from "react";
import { Separator } from "../../Separator";
import { Title } from "../../Title";
import { DivEffect, HtmlIcon, IconsContainer, IconTitle, JsIcon, KnowledgeContainer, NextIcon, NodeIcon, ReactIcon, SectionKnowledgeContainer, StyledIcon, TailIcon, TsIcon } from "./styles";

interface IconProps {
  ishover: boolean
  title: string
  onMouseOver: (hover: boolean) => void
}

export function Knowledge(props: IconProps) {

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
          <ReactIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('REACT JS')} onMouseLeave={() => setIsHover(false)} />
          <TsIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('TYPESCRIPT')} onMouseLeave={() => setIsHover(false)} />
          <TailIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('TAILWIND')} onMouseLeave={() => setIsHover(false)} />
          <HtmlIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('HTML 5')} onMouseLeave={() => setIsHover(false)} />
          <NodeIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('NODE JS')} onMouseLeave={() => setIsHover(false)} />
          <NextIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('NEXT JS')} onMouseLeave={() => setIsHover(false)} />
          <StyledIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('STYLED COMP.')} onMouseLeave={() => setIsHover(false)} />
          <JsIcon ishover={isHover} onMouseEnter={(title) => handleMouseOver('JAVASCRIPT')} onMouseLeave={() => setIsHover(false)} />

        </IconsContainer>

        <DivEffect />
        {
          isHover && <IconTitle>{title}</IconTitle>
        }
      </KnowledgeContainer>
    </SectionKnowledgeContainer>
  )
}