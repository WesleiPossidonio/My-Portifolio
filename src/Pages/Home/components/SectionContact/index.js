import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

import { IsTitle } from '../../../../components'
import { Container, TextContact, Button, ButtonWhatsapp } from './style'

export const SectionContact = () => {
  return (
    <Container id="Contact">
      <IsTitle>ENTRE EM CONTATO</IsTitle>
      <TextContact>
        Eai, Curtiu o meu Trabalho? quer me conhecer mais? <br /> Vamos
        Conversar!😁
      </TextContact>

      <Button href="mailto:weslwifranca123@gmail.com">
        <AiOutlineMail />
        Envie uma mensagem
      </Button>

      <TextContact button>ou</TextContact>

      <ButtonWhatsapp
        href="https://api.whatsapp.com/send?phone=5522981016560"
        target="_blank"
      >
        <BsWhatsapp />
        Envie uma mensagem
      </ButtonWhatsapp>
    </Container>
  )
}
