import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .swiper-slide {
    background: transparent;
    width: 100%;
    height: 558px;
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
