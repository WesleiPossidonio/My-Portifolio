import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

import { Container, ContainerHeader, NavLink } from './style'

export const MenuMobile = ({
  menuIsViseble,
  setMenuIsVisible,
  clickPage,
  setClicPage
}) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsViseble ? 'hidden' : 'auto'
  }, [menuIsViseble])

  return (
    <Container isVisible={menuIsViseble} menuMobileVisible={clickPage}>
      <IoClose
        size={35}
        onClick={() => {
          setMenuIsVisible(false)
        }}
      />
      <ContainerHeader>
        <NavLink
          to="HomePage"
          spy={true}
          smooth={true}
          onClick={() => setClicPage(true)}
        >
          Home
        </NavLink>
        <NavLink
          to="AboutMe"
          spy={true}
          smooth={true}
          onClick={() => setClicPage(true)}
        >
          Sobre Mim
        </NavLink>
        <NavLink
          to="Skill"
          spy={true}
          smooth={true}
          onClick={() => setClicPage(true)}
        >
          Minhas Skills
        </NavLink>
        <NavLink
          to="Project"
          spy={true}
          smooth={true}
          onClick={() => setClicPage(true)}
        >
          Projetos
        </NavLink>
        <NavLink
          to="Contact"
          spy={true}
          smooth={true}
          onClick={() => setClicPage(true)}
        >
          Contato
        </NavLink>
      </ContainerHeader>
    </Container>
  )
}

MenuMobile.propTypes = {
  setMenuIsVisible: PropTypes.func,
  menuIsViseble: PropTypes.bool,
  clickPage: PropTypes.bool,
  setClicPage: PropTypes.func
}
