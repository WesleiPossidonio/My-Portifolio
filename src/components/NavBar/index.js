import PropTypes from 'prop-types'
import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

import { Header, ContainerHeader, NavLink, Logo, Icon } from './style'
export const Navbar = ({ setMenuIsVisible, setClicPage }) => {
  const navigate = useNavigate()

  const handleNavigateTobriefing = () => {
    navigate('/briefing')
  }
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
        <NavLink to="Project" spy={true} smooth={true}>
          Projetos
        </NavLink>
        <NavLink to="Contact" spy={true} smooth={true}>
          Contato
        </NavLink>
        <NavLink onClick={handleNavigateTobriefing}>Briefing</NavLink>
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
