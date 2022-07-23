import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #0c0c0c;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (max-width: 768px) {
    margin-top: 7em;
  }
`

export const P = styled.p`
  margin-left: 2px;

  font-style: normal;
  font-weight: 600;
  font-size: min(20px, 3vw);
  line-height: 29px;

  text-transform: uppercase;

  color: #ffffff;

  span {
    color: #00df5e;
    font-weight: bold;
  }
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(60px, 1em + 4.6vw);
  text-transform: uppercase;
  color: #ffffff;
`

export const TextSkil = styled.p`
  margin-left: 3px;
  font-style: normal;
  font-weight: 600;
  font-size: min(24px, 2.5vw);
  line-height: 29px;

  text-transform: uppercase;

  color: #ffffff;

  span {
    color: #00df5e;
    margin-left: 2px;
  }
`

export const ContainerButton = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;

  @media screen and (max-width: 768px) {
    .button {
      width: 90px;
      font-size: 13px;
      margin-top: -1em;
    }
  }
`

export const Image = styled.img`
  width: 400px;
  padding: 15px;

  @media screen and (max-width: 880px) {
    margin-top: -3em;
    width: min(350px, 75vw);
    margin-bottom: 2rem;
  }
`
