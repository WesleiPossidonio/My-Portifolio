import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import { Container, ContainerHeader, NavLink } from './style'

export const MenuMobile = ({
  menuIsViseble,
  setMenuIsVisible,
  clickPage,
  setClicPage
}) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsViseble ? 'hidden' : 'auto'
    document.body.style.overflowY = clickPage && 'auto'
  }, [menuIsViseble, clickPage])

  const navigate = useNavigate()

  const handleNavigateTobriefing = () => {
    setClicPage(true)
    navigate('/briefing')
  }

  return (
    <Container isVisible={menuIsViseble} menuMobileVisible={clickPage}>
      <IoClose
        size={35}
        onClick={() => {
          setMenuIsVisible(false)
        }}
      />
      <ContainerHeader>
        <NavLink to="HomePage" spy={true} onClick={() => setClicPage(true)}>
          Home
        </NavLink>
        <NavLink to="AboutMe" spy={true} onClick={() => setClicPage(true)}>
          Sobre Mim
        </NavLink>
        <NavLink to="Skill" spy={true} onClick={() => setClicPage(true)}>
          Minhas Skills
        </NavLink>
        <NavLink to="Project" spy={true} onClick={() => setClicPage(true)}>
          Projetos
        </NavLink>
        <NavLink to="Contact" spy={true} onClick={() => setClicPage(true)}>
          Contato
        </NavLink>
        <NavLink onClick={handleNavigateTobriefing}>Briefing</NavLink>
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
