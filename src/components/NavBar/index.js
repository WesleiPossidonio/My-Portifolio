import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import { Header, ContainerHeader, NavLink, Logo, Icon } from './style'
export const Navbar = ({ setMenuIsVisible, setClicPage, clickPage }) => {
  useEffect(() => {
    document.body.style.overflowY = clickPage ? 'auto' : 'hidden'
  }, [clickPage])

  return (
    <Header>
      <Logo activeClass="active" to="HomePage">
        Weslei França
      </Logo>

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
      <Icon>
        <HiOutlineMenuAlt3
          onClick={() => {
            setMenuIsVisible(true)
            setClicPage(false)
          }}
        />
      </Icon>
    </Header>
  )
}

Navbar.propTypes = {
  setMenuIsVisible: PropTypes.func,
  setClicPage: PropTypes.func,
  clickPage: PropTypes.bool
}
