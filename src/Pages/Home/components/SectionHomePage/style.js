import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 14rem 0;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  background: #0c0c0c;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    padding: 10rem 0;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`

export const P = styled.p`
  margin-left: 0.125rem;

  font-style: normal;
  font-weight: 600;
  font-size: min(1.25rem, 3vw);
  line-height: 1.8125rem;

  text-transform: uppercase;

  color: #ffffff;

  span {
    color: #00df5e;
    font-weight: bold;
  }

  @media screen and (min-width: 2000px) {
    font-size: min(1.5rem, 3vw);
  }
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(3.75rem, 1rem + 4.6vw);
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (min-width: 2000px) {
    font-size: min(4.75rem, 1rem + 4.6vw);
  }
`

export const TextSkil = styled.p`
  margin-left: 3px;
  font-style: normal;
  font-weight: 600;
  font-size: min(1.5rem, 2.5vw);
  line-height: 1.8125rem;

  text-transform: uppercase;

  color: #ffffff;

  span {
    color: #00df5e;
    margin-left: 2px;
  }

  @media screen and (min-width: 2000px) {
    font-size: min(1.8rem, 3vw);
  }
`

export const ContainerButton = styled.div`
  margin-top: 1.5625rem;
  display: flex;
  gap: 0.9375rem;

  @media screen and (max-width: 768px) {
    .button {
      width: 5.625rem;
      font-size: 0.8125rem;
      margin-top: -1rem;
    }
  }
`

export const Image = styled.img`
  width: 22rem;

  animation: moveToTopAndButton 2s infinite alternate ease-in-out;

  @keyframes moveToTopAndButton {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(1rem);
    }
  }

  @media screen and (max-width: 880px) {
    width: min(21.875rem, 75vw);
  }

  @media screen and (min-width: 2000px) {
    width: min(30rem, 75vw);
  }
`
