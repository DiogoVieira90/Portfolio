import { CardContainer, CardImg, CardTitle } from "./styles";
import imgError from '../../../assets/app-preview-error.jpg'
interface CardProps {
  srcimg: string
  fallbackSrc: string
  title: string
  url: string
}


export function ProjectCard({ srcimg = imgError, fallbackSrc, title, url }: CardProps) {

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackSrc;
  };



  return (
    <CardContainer>
      <CardImg src={srcimg} onError={handleImageError} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}