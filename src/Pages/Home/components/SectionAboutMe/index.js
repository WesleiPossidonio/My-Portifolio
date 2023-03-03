import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiDownloadCloud } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import 'aos/dist/aos.css'

import Curriculo from '../../../../assets/Curriculo.pdf'
import { Button, IsTitle } from '../../../../components'
import { SkillPage } from './components/SkillPage'
import {
  Container,
  ContainerItens,
  ContainerButton,
  TextCity,
  Text,
  TextContainer
} from './style'

export const SectionAboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container id="AboutMe">
      <ContainerItens data-aos="fade-right">
        <IsTitle aboutMe>Sobre Mim</IsTitle>
        <TextCity>
          {' '}
          <FaMapMarkerAlt /> Macaé, RJ{' '}
        </TextCity>
        <TextContainer>
          <Text>
            Atualmente, estou iniciando minha carreira como programador. Com
            seis meses de Carreira passei por duas agencias que são: DUC e
            i3Group ambas desta cidade de Macaé-RJ. Onde aprendi muito e
            desenvolvi meus conhecimentos.
            <span>
              {' '}
              Estou cursando o 4° semestre na graduação de Engenharia de
              Software
            </span>
            , pela instituição Estácio de Sá. <br />
            Possuo conhecimentos em:
            <span>
              {' '}
              HTML5, CSS3, JavaScript, TypeScript, Bootstrap, React.js Git e
              GitHub Node.Js usando o flamework Express.
            </span>{' '}
            Bancos de Dados relacináveis como <span>PostgresSQL</span> e não
            relacionáveis como <span>MongoDB.</span> Atualmente estou
            estudadando React.js na Rocketseat Ignite, colocando em prática os
            conhecimentos acima, e em um futuro próximo tenho o objetivo de
            eprender React Native.
          </Text>
        </TextContainer>

        <ContainerButton>
          <Button href={Curriculo} target="_blank">
            <FiDownloadCloud />
            Curriculo
          </Button>
          <Button href="mailto:weslwifranca123@gmail.com">
            <HiOutlineMail />
            E-mail
          </Button>
        </ContainerButton>
      </ContainerItens>

      <SkillPage data-aos="zoom-in" />
    </Container>
  )
}
