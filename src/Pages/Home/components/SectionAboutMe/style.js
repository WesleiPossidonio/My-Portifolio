import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 8rem 2rem;
  width: 100%;
  background: #121212;
  overflow-x: hidden;

  @media screen and (min-width: 1028px) {
    padding: 8rem 6rem;
  }

  @media screen and (max-width: 858px) {
    flex-wrap: wrap;
  }
`

export const ContainerItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TextCity = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: 1.3125rem;

  color: #ffffff;
`
export const TextContainer = styled.div`
  width: 100%;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: min(0.9375rem, 4vw);
  line-height: 2rem;
  margin-bottom: 1.875rem;
  text-align: justify;

  color: #c4c4c4;

  span {
    color: #00df5e;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`
