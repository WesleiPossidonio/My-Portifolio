import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiDownloadCloud } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import 'aos/dist/aos.css'

import Curriculo from '../../../../assets/Curriculo-Weslei-França.pdf'
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
            Olá, meu nome é <span> Weslei França</span>, e eu sou{' '}
            <span> Desenvolvedor Front-End Jr.</span> com uma grande paixão pela
            tecnologia e pelo desenvolvimento web. <br />
          </Text>

          <Text>
            Ao longo dos meus seis meses de carreira, tive a oportunidade de
            trabalhar em{' '}
            <span>
              {' '}
              duas agências de renome aqui em Macaé-RJ , a DUC e i3Group{' '}
            </span>
            , onde participei do desenvolvimento de vários projetos web e ganhei
            muita experiência.
          </Text>

          <Text>
            <span>
              {' '}
              Atualmente estou cursando o 5° semestre na graduação de Engenharia
              de Software
            </span>
            , pela instituição Estácio de Sá. <br />
          </Text>
          <Text>
            Possuo conhecimentos e experiência em:
            <span>
              {' '}
              HTML5, CSS3, JavaScript, TypeScript, Bootstrap, React.js Git e
              GitHub Node.Js usando o flamework Express. metodologias Ágeis como
              Scrum
            </span>{' '}
            Bancos de Dados relacináveis como <span>PostgresSQL</span> e não
            relacionáveis como <span>MongoDB.</span> Atualmente estou
            estudadando React.js na Rocketseat Ignite, colocando em prática os
            conhecimentos acima, e em um futuro próximo tenho o objetivo de
            aprender React Native. <br />
          </Text>

          <Text>
            Se você procura um desenvolvedor Front-End Jr. apaixonado por
            tecnologia e comprometido com a excelência no trabalho, por favor,
            entre em contato comigo. Seria um prazer fazer parte da sua equipe.
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
