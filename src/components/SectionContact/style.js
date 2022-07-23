import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  background: #0c0c0c;
`

export const TextContact = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: min(20px, 3.5vw);
  line-height: 38px;
  margin-bottom: 30px;
  padding: 5px;
  color: #c4c4c4;
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 64px;
  padding: 16px 48px;
  border-radius: 4px;
  border: 2px solid #00df5e;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  color: #00df5e;
  text-decoration: none;

  @media screen and (max-width: 880px) {
    width: 300px;
    font-size: 16px;
  }

  &:hover {
    background-color: #00df5e;
    color: #0c0c0c;
    transition: 1s ease;
    transform: scale(1.1);
    transition: all 0.5s;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50px;
      background: transparent;
      height: 50%;
      width: 100%;
      transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
      filter: blur(8px);
      transition: 1 ease;
    }
    &:hover::before {
      background: #00df5e;
      top: 70px;
    }

    &:active {
      background: none;
    }

    @media screen and (max-width: 375px) {
      width: 270px;
      font-size: 14px;

      &::before {
        content: '';
        position: absolute;
        left: 60px;
        top: 50px;
        background: transparent;
        height: 50%;
        width: 55%;
        transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
        filter: blur(8px);
        transition: 1 ease;
      }
    }
  }
`
