import { ProjectCard } from "../../cards/ProjectCard";
import { Title } from "../../Title";
import { Separator } from "../../Separator";
import { FilterButton, FilterContainer, ProjectsContainer, SectionProjectsContainer } from "./styles";

import defaultImage from '../../../assets/p1.webp'
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

interface ReposProps {
  name: string
  default_branch: string
  html_url: string
  homepage: string
  stargazers_count: number
}


export function Projects() {

  const [repos, setRepos] = useState<ReposProps[]>([])
  const [filter, setFilter] = useState<number[]>([1, 0])
  const [search, setSearch] = useState('')

  function handleClickFilter(btn: number[]) {
    setFilter(btn)
  }

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.toLowerCase().includes(search))
    : [];

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

      <FilterContainer>

        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#00E5FF" offset="0%" />
            <stop stopColor="#3253FF" offset="100%" />
          </linearGradient>

        </svg>
        <FilterButton active={filter[0]} onClick={() => handleClickFilter([1, 0])} >
          <BsFillStarFill className="FilterIcon" style={{ fill: "url(#gradient)" }} size={20} strokeWidth={0} />
        </FilterButton>
        <FilterButton active={filter[1]} onClick={() => handleClickFilter([0, 1])} >
          <span>A-Z</span>
        </FilterButton>

        <input
          name="search"
          type="text"
          placeholder="Buscar..."
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </FilterContainer>

      <div className="shadow">
        <span className="shadowTop" />

        <ProjectsContainer>

          {

            search.length > 0 ? (
              filteredRepos.map((repo, index) => (
                repo.name !== "Portfolio" && <ProjectCard key={index} urlrepo={repo.html_url} urlweb={repo.homepage} srcimg={`https://raw.githubusercontent.com/DiogoVieira90/${repo.name}/${repo.default_branch}/app-preview.jpg`}
                  onClick={() => handleClick(repo.html_url)}
                  fallbackSrc={defaultImage}
                  title={repo.name} />
              ))
            ) : (filter[0] === 1 ? (

              repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo, index) => (
                repo.name !== "Portfolio" && <ProjectCard key={index} urlrepo={repo.html_url} urlweb={repo.homepage} srcimg={`https://raw.githubusercontent.com/DiogoVieira90/${repo.name}/${repo.default_branch}/app-preview.jpg`}
                  onClick={() => handleClick(repo.html_url)}
                  fallbackSrc={defaultImage}
                  title={repo.name} />
              ))
            ) : (
              repos.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)).map((repo, index) => (
                repo.name !== "Portfolio" && <ProjectCard key={index} urlrepo={repo.html_url} urlweb={repo.homepage} srcimg={`https://raw.githubusercontent.com/DiogoVieira90/${repo.name}/${repo.default_branch}/app-preview.jpg`}
                  onClick={() => handleClick(repo.html_url)}
                  fallbackSrc={defaultImage}
                  title={repo.name} />
              ))
            )


            )

          }

        </ProjectsContainer>
        <span className="shadowBottom" />
      </div>

    </SectionProjectsContainer>

  )
}
