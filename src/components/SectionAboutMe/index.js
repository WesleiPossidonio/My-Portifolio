import Aos from 'aos'
import React, { useEffect } from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import 'aos/dist/aos.css'

import ImgAboutMe from '../../assets/Avatar-image.svg'
import Curriculo from '../../assets/Curriculo.pdf'

import { Button, IsTitle } from '..'

import {
  Container,
  ContainerItens,
  ContainerButton,
  TextCity,
  Text,
  Image,
  TextContainer
} from './style'

export const SectionAboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container id="AboutMe">
      <Image data-aos="fade-up-right" src={ImgAboutMe} alt="imagem-Avatar" />
      <ContainerItens data-aos="fade-up-left">
        <IsTitle>Sobre Mim</IsTitle>
        <TextCity>Macaé, RJ </TextCity>
        <TextContainer>
          <Text>
            Atualmente, estou iniciando minha carreira como programador.
            <span>
              Estou cursando o 3° semestre na graduação de Engenharia de
              Software
            </span>
            , pela instituição Estácio de Sá. <br />
            Possuo conhecimentos em:
            <span>
              HTML5, CSS3, JavaScript, Git e GitHub Node.Js usando o flamework
              Express.
            </span>
            Bancos de Dados relacináveis como <span>PostgresSQL</span> e não
            relacionáveis como <span>MongoDB.</span> Atualmente estou
            estudadando React.js, colocando em prática os conhecimentos acima, e
            em um futuro próximo tenho o objetivo de eprender React Native.
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
    </Container>
  )
}
