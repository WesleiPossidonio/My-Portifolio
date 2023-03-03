import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .swiper-slide {
    background: transparent;
    width: 100%;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #212121;
  border-radius: 0.625rem;
  width: 16.25rem;
  height: 21.875rem;
`
export const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 40%;
  margin-top: -0.5625rem;
`

export const ContainerText = styled.div`
  margin-top: 0.625rem;
  margin-left: 0.3125rem;
  padding: 0.625rem;
`

export const NameProject = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.8125rem;

  color: #00df5e;
`

export const AboutProject = styled.p`
  margin-top: 0.25rem;
  font-style: normal;
  font-weight: 300;
  font-size: 0.8125rem;
  line-height: 1.625rem;

  color: #c4c4c4;
`

export const ContainerButton = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.625rem;
`

export const ContainerTecnologies = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: start;
  gap: 0.125rem;
  font-size: 0.5rem;
  color: #00df5e;
`
