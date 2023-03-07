import { CardContainer, CardTitle } from "./styles";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

interface CardProps {
  icon: string
  title: string
}

export function ContactCard({ icon, title }: CardProps) {

  return (

    <CardContainer>

      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#00E5FF" offset="0%" />
          <stop stopColor="#3253FF" offset="100%" />
        </linearGradient>
      </svg>

      {
        icon === 'github' &&
        <FiGithub style={{ stroke: "url(#blue-gradient)" }} size={128} strokeWidth={0.4} />
      }
      {
        icon === 'instagram' &&
        <FiInstagram style={{ stroke: "url(#blue-gradient)" }} size={128} strokeWidth={0.4} />
      }
      {
        icon === 'linkedin' &&
        <FiLinkedin style={{ stroke: "url(#blue-gradient)" }} size={128} strokeWidth={0.4} />
      }

      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}