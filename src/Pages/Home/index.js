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
  return (
    <HomeContainer>
      <MenuMobile
        menuIsViseble={menuIsViseble}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <SectionHomePage />
      <SectionAboutMe />
      <SectionSkillPage />
      <SectionMyProject />
      <SectionContact />
      <Footer />
    </HomeContainer>
  )
}
