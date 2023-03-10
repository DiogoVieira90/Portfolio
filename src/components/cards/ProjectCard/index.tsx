import { CardContainer, CardImg, CardImgContainer, CardInfo, CardTitle, Container } from "./styles";
import imgError from '../../../assets/app-preview-error.jpg'
import { useState } from "react";
import { VscGithub, VscGlobe } from "react-icons/vsc";
interface CardProps {
  srcimg: string
  fallbackSrc: string
  title: string
  urlweb: string
  urlrepo: string
  onClick: (url: string) => void
}


export function ProjectCard({ srcimg = imgError, fallbackSrc, title, urlweb, urlrepo, onClick }: CardProps) {

  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackSrc;
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >

      {
        isHovered && <CardInfo className="hovered">

          <a href={urlweb} target={"_blank"}><VscGlobe className="cardIcons" /> Web Page</a>

          <a href={urlrepo} target={"_blank"}><VscGithub className="cardIcons" /> Repositório</a>

          {/* <a onClick={() => onClick('')}>LINK</a> */}
        </CardInfo>
      }

      <CardContainer

      >
        <CardImgContainer >
          <CardImg src={srcimg} onError={handleImageError} />
        </CardImgContainer>
        <CardTitle>{title}</CardTitle>
      </CardContainer>

    </Container>
  )
}