import { Separator } from "../../Separator";
import { Title } from "../../Title";
import { ContactsContainer, SectionContactContainer } from "./styles";
import { ContactCard } from "../../cards/ContactCard";

export function Contact() {

  const Cards = [
    {
      icon: 'linkedin',
      title: 'Linkedin'
    },
    {
      icon: 'github',
      title: 'Github'
    },
    {
      icon: 'instagram',
      title: 'Instagram'
    },
  ]

  return (
    <SectionContactContainer id="contact">
      <Title>CONTACT</Title>
      <Separator />
      <ContactsContainer>
        {
          Cards.map((card, index) => (
            <ContactCard key={index} icon={card.icon} title={card.title} />
          ))
        }
      </ContactsContainer>
    </SectionContactContainer>
  )
}