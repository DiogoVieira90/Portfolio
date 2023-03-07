import { ProjectCard } from "../../cards/ProjectCard";
import { Title } from "../../Title";
import { ProjectsContainer, SectionProjectsContainer } from "./styles";

import defaultImage from '../../../assets/p1.webp'

interface ReposProps {
  name: string
  default_branch: string
  html_url: string
}

import { Separator } from "../../Separator";
import { useCallback, useEffect, useState } from "react";

export function Projects({ name, default_branch, html_url }: ReposProps) {

  const [repos, setRepos] = useState<ReposProps[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/diogovieira90/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  function handleClick(href: string) {
    window.open(href, '_blank');
  }

  return (
    <SectionProjectsContainer id="projects">
      <Title>PROJECTS</Title>
      <Separator />

      <ProjectsContainer>

        {
          repos.map((repo, index) => (

            <ProjectCard key={index} srcimg={`https://raw.githubusercontent.com/DiogoVieira90/${repo.name}/${repo.default_branch}/src/assets/app-preview.jpg`} onClick={() => handleClick('https://react-icons.github.io/react-icons/icons?name=si')} fallbackSrc={defaultImage} title={repo.name} />

          ))
        }

      </ProjectsContainer>
    </SectionProjectsContainer>
  )
}