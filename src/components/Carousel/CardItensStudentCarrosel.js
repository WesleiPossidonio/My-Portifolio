import propTypes from 'prop-types'
import React from 'react'
import { FiGithub, FiLink } from 'react-icons/fi'

import { Button } from '../Button'
import {
  AboutProject,
  CardItem,
  ContainerButton,
  ContainerTecnologies,
  ContainerText,
  Image,
  NameProject
} from './Style'

export const CardItensStudentCarrosel = ({ list }) => {
  return (
    <CardItem>
      <Image src={list.ImageProject} alt="imagem-project-HomeYou" />
      <ContainerText>
        <NameProject>{list.NameProject}</NameProject>
        <AboutProject>{list.DescriptionProject}</AboutProject>
        <ContainerTecnologies>
          <span>{list.Tecnologies}</span>
        </ContainerTecnologies>
        <ContainerButton>
          <Button href={list.LinkProject} target="_blank" cardButton>
            <FiLink />
            Acessar
          </Button>
          <Button href={list.LinkGitHub} target="_blank" cardButton>
            <FiGithub />
            GitHub
          </Button>
        </ContainerButton>
      </ContainerText>
    </CardItem>
  )
}

CardItensStudentCarrosel.propTypes = {
  list: propTypes.object
}
