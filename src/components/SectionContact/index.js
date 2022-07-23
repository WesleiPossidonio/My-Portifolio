import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { IsTitle } from '..'

import { Container, TextContact, Button } from './style'

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
    </Container>
  )
}
