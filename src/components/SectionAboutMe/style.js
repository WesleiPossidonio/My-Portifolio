import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 934px;
  padding: 70px;
  width: 100%;
  background: #121212;
  overflow-x: hidden;
`

export const Image = styled.img`
  width: 350px;
  padding: 15px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextCity = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 21px;

  color: #ffffff;
`
export const TextContainer = styled.div`
  width: 500px;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: min(15px, 4vw);
  line-height: 32px;
  margin-bottom: 30px;
  text-align: justify;

  color: #c4c4c4;

  span {
    color: #00df5e;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`
