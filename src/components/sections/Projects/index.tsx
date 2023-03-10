import { ProjectCard } from "../../cards/ProjectCard";
import { Title } from "../../Title";
import { ProjectsContainer, SectionProjectsContainer } from "./styles";

import defaultImage from '../../../assets/p1.webp'

interface ReposProps {
  name: string
  default_branch: string
  html_url: string
  homepage: string
}

import { Separator } from "../../Separator";
import { useCallback, useEffect, useState } from "react";

export function Projects() {

  const [repos, setRepos] = useState<ReposProps[]>([])



  useEffect(() => {
    fetch('https://api.github.com/users/diogovieira90/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await fetch('https://api.vercel.com/v4/projects', {
  //       headers: {
  //         Authorization: `Bearer ${'cPg1qVnVhD6iBAHncpLRZHsZ'}`,
  //         // Authorization: `Bearer ${process.env.REACT_APP_VERCEL_API_TOKEN}`,
  //       },
  //     });
  //     const data = await response.json().then(response => response.projects)
  //     console.log(data)
  //     const projetos = data.map(({ alias }) => {
  //       return alias
  //     })
  //     const alias = projetos.map(([{ domain }]) => {
  //       return domain
  //     })
  //     setProjects(alias);
  //   };
  //   fetchProjects();
  // }, []);
  // console.log(projects)




  function handleClick(href: string) {
    window.open(href, '_blank');
  }

  return (
    <SectionProjectsContainer id="projects">
      <Title>PROJECTS</Title>
      <Separator />
      <div className="shadow">
        <span className="shadowTop" />

        <ProjectsContainer>

          {
            repos.map((repo, index) => (
              repo.name !== "Portfolio" && <ProjectCard key={index} urlrepo={repo.html_url} urlweb={repo.homepage} srcimg={`https://raw.githubusercontent.com/DiogoVieira90/${repo.name}/${repo.default_branch}/app-preview.jpg`}
                onClick={() => handleClick(repo.html_url)}
                fallbackSrc={defaultImage}
                title={repo.name} />
            ))
          }

        </ProjectsContainer>
        <span className="shadowBottom" />
      </div>

    </SectionProjectsContainer>
  )
}