import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;

  .rec.rec-item-wrapper {
    width: 100% !important;
    padding: 1em !important;
    margin: 10px !important;
  }

  .rec.rec-arrow {
    background-color: #00df5e;
    color: #212121;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #00df5e;
    background-color: #c4c4c4;
    color: #00df5e;
  }

  .rec.rec-arrow:disabled {
    display: none;
  }

  @media screen and (min-width: 2050px) {
    .rec.rec-carousel {
      width: 70%;
    }
  }
`
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #212121;
  border-radius: 10px;
  width: 260px;
  height: 350px;
`
export const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 35%;
  margin-top: -9px;
`

export const ContainerText = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  padding: 10px;
`

export const NameProject = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;

  color: #00df5e;
`

export const AboutProject = styled.p`
  margin-top: 4px;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 26px;

  color: #c4c4c4;
`

export const ContainerButton = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
`

export const ContainerIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  gap: 2px;
  font-size: 20px;
  color: #c4c4c4;
`
