import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

import { Container, ContainerHeader, NavLink } from './style'

export const MenuMobile = ({ menuIsViseble, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsViseble ? 'hidden' : 'auto'
  }, [menuIsViseble])

  return (
    <Container isVisible={menuIsViseble}>
      <IoClose size={35} onClick={() => setMenuIsVisible(false)} />
      <ContainerHeader>
        <NavLink to="HomePage" spy={true} smooth={true}>
          Home
        </NavLink>
        <NavLink to="AboutMe" spy={true} smooth={true}>
          Sobre Mim
        </NavLink>
        <NavLink to="Skill" spy={true} smooth={true}>
          Minhas Skills
        </NavLink>
        <NavLink to="Project" spy={true} smooth={true}>
          Projetos
        </NavLink>
        <NavLink to="Contact" spy={true} smooth={true}>
          Contato
        </NavLink>
      </ContainerHeader>
    </Container>
  )
}

MenuMobile.propTypes = {
  setMenuIsVisible: PropTypes.func,
  menuIsViseble: PropTypes.bool
}
