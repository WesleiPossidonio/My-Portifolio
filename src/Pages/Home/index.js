import React, { useState } from 'react'

import {
  SectionHomePage,
  SectionAboutMe,
  SectionMyProject,
  SectionSkillPage,
  SectionContact,
  Footer,
  Navbar,
  MenuMobile
} from '../../components'
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
      <SectionSkillPage />
      <SectionMyProject />
      <SectionContact />
      <Footer />
    </HomeContainer>
  )
}
