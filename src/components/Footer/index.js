import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { ImWhatsapp, ImYoutube } from 'react-icons/im'

import { Container, Text, IconsContainer, LinkContact } from './style'

export const Footer = () => {
  return (
    <Container>
      <Text>Made by Weslei França &copy; 2022</Text>
      <IconsContainer>
        <LinkContact
          href=" https://api.whatsapp.com/send?phone=5522981016605&text=Olá%20como%20vai."
          target="_blank"
        >
          <ImWhatsapp />
        </LinkContact>
        <LinkContact>
          <FaLinkedin />
        </LinkContact>
        <LinkContact>
          <FaGithub />
        </LinkContact>
        <LinkContact>
          <FaInstagram />
        </LinkContact>
        <LinkContact>
          <ImYoutube />
        </LinkContact>
      </IconsContainer>
    </Container>
  )
}
