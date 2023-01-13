import React from 'react'

import { IsTitle, IsCarousel } from '../../components'
import { Container } from './style'

export const SectionMyProject = () => {
  return (
    <Container id="Project">
      <IsTitle style={{ marginBottom: '2em' }}>Principais Projetos</IsTitle>
      <IsCarousel />
    </Container>
  )
}
