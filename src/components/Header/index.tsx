import { useState } from "react";
import { NavLink } from "../Link";
import { HeaderContainer, HeaderContent, Logo, NavBar } from "./styles";

const LINKS = [
  {
    id: 1,
    active: true,
    label: 'ABOUT',
    target: 'about',
    offset: -50
  },
  {
    id: 2,
    active: false,
    label: 'KNOWLEDGE',
    target: 'knowledge',
    offset: 0
  },
  {
    id: 3,
    active: false,
    label: 'PROJECTS',
    target: 'projects',
    offset: 0
  },
  {
    id: 4,
    active: false,
    label: 'CONTACT',
    target: 'contact',
    offset: 50
  },
]

export function Header() {

  const [links, setLinks] = useState(LINKS)

  function handleClick(id: number) {
    // const filteredLinks = links.filter(link => link.id !== id).map(link => ({ ...link, active: false }))
    // const currentLinks = [...links]
    // const link = links.findIndex(link => link.id === id)
    // setLinks([{ ...currentLinks[link], active: true }, ...filteredLinks])


    setLinks(links.map(link => link.id === id ? { ...link, active: true } : { ...link, active: false }))
    console.log(id, links)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>&lt;CodeDio&gt;</Logo>

        <NavBar>
          {
            links.map(link => (
              <NavLink key={link.id} target={link.target} offset={link.offset} id={link.id} onClick={() => handleClick(link.id)} active={link.active}>{link.label}</NavLink>
            ))
          }
        </NavBar>
      </HeaderContent>
    </HeaderContainer>
  )
}