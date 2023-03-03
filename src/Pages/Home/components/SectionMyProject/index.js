import React, { useState } from 'react'

import { IsCarousel, IsTitle } from '../../../../components'
import { ButtonTypeProject, Container, ContainerButton } from './style'

export const SectionMyProject = () => {
  const [statusProject, setStatusProject] = useState({
    isStudent: false,
    isWorkExperience: false,
    allProjects: true
  })

  const handleAllProjects = () => {
    const newStatusProject = {
      isStudent: false,
      isWorkExperience: false,
      allProjects: true
    }

    setStatusProject(newStatusProject)
    console.log(statusProject)
  }

  const handleTypeProjectStudent = () => {
    const newStatusProject = {
      isStudent: true,
      isWorkExperience: false,
      allProjects: false
    }

    setStatusProject(newStatusProject)
    console.log(statusProject)
  }

  const handleWorkExperience = () => {
    const newStatusProject = {
      isStudent: false,
      isWorkExperience: true,
      allProjects: false
    }

    setStatusProject(newStatusProject)
    console.log(statusProject)
  }

  return (
    <Container id="Project">
      <IsTitle style={{ marginBottom: '2em' }}>Principais Projetos</IsTitle>
      <ContainerButton>
        <ButtonTypeProject onClick={handleAllProjects}>Todos</ButtonTypeProject>
        <ButtonTypeProject onClick={handleTypeProjectStudent}>
          Fins de Estudos
        </ButtonTypeProject>
        <ButtonTypeProject onClick={handleWorkExperience}>
          Experiência Profissional
        </ButtonTypeProject>
      </ContainerButton>

      <IsCarousel statusProject={statusProject} />
    </Container>
  )
}
