import React, { useState } from 'react'

import { Footer, Navbar, MenuMobile } from '../../components'
import {
  SectionHomePage,
  SectionAboutMe,
  SectionMyProject,
  SectionContact
} from './components'
import { HomeContainer } from './style'

export const Home = () => {
  const [menuIsViseble, setMenuIsVisible] = useState(false)
  const [clickPage, setClicPage] = useState(false)
  return (
    <HomeContainer>
      <MenuMobile
        menuIsViseble={menuIsViseble}
        setMenuIsVisible={setMenuIsVisible}
        setClicPage={setClicPage}
        clickPage={clickPage}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} setClicPage={setClicPage} />
      <SectionHomePage />
      <SectionAboutMe />
      <SectionMyProject />
      <SectionContact />
      <Footer />
    </HomeContainer>
  )
}
