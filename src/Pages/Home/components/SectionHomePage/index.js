import Aos from 'aos'
import React, { useEffect } from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import Typist from 'react-typist'

import AvatarHome from '../../../../assets/ImgHome.svg'
import { Button } from '../../../../components'
import {
  Container,
  ContainerItens,
  P,
  H1,
  TextSkil,
  Image,
  ContainerButton
} from './style'
export const SectionHomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container id="HomePage">
      <ContainerItens>
        <Typist cursor={{ show: false }}>
          <P>
            <span>OLÁ</span>, EU SOU
          </P>
          <H1>WESLEI FRANÇA</H1>
          <TextSkil>
            DESENVOLVEDOR <span> FRONT-END</span>
          </TextSkil>
        </Typist>
        <ContainerButton>
          <Button
            href="https://www.linkedin.com/in/wesleifranca/"
            target="_blank "
            className="button"
          >
            <FiLinkedin />
            Linkedin
          </Button>
          <Button
            href="https://github.com/WesleiPossidonio"
            target="_blank "
            className="button"
          >
            <FiGithub />
            Github
          </Button>
        </ContainerButton>
      </ContainerItens>

      <Image
        src={AvatarHome}
        alt="imagem-Avatar"
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
    </Container>
  )
}
