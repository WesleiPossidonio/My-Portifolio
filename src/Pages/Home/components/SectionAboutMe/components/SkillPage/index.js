import React from 'react'
import { DiGit } from 'react-icons/di'
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaBootstrap
} from 'react-icons/fa'
import {
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiTypescript
} from 'react-icons/si'

import { ContainerSkill, ContainerIcon, TextIcon } from './style'

export const SkillPage = () => {
  return (
    <ContainerSkill id="Skill">
      <ContainerIcon>
        <FaHtml5 className="icon" />
        <TextIcon>HTML</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <FaCss3Alt className="icon" />
        <TextIcon>CSS</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <SiJavascript className="icon" />
        <TextIcon>JavaScript</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <SiTypescript className="icon" />
        <TextIcon>TypeScript</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <FaReact className="icon" />
        <TextIcon>REACT.JS</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <FaBootstrap className="icon" />
        <TextIcon>BOOTSTRAP</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <DiGit className="icon" />
        <TextIcon>GIT</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <FaNodeJs className="icon" />
        <TextIcon>NODE.JS</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <FaDocker className="icon" />
        <TextIcon>DOCKER</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <SiPostgresql className="icon" />
        <TextIcon>PostgresSQL</TextIcon>
      </ContainerIcon>
      <ContainerIcon>
        <SiMongodb className="icon" />
        <TextIcon>MongoDB</TextIcon>
      </ContainerIcon>
    </ContainerSkill>
  )
}
