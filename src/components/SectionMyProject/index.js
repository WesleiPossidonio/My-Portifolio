import React from 'react'

import { IsTitle, IsCarousel } from '../../components'
import { Container } from './style'

export const SectionMyProject = () => {
  return (
    <Container id="Project">
      <IsTitle style={{ textAlign: 'start', marginBottom: '3em' }}>
        Principais Projetos
      </IsTitle>
      <IsCarousel />
    </Container>
  )
}
