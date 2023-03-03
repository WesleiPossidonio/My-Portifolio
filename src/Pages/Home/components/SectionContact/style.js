import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 27.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: #121212;
`

export const TextContact = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: min(1.25rem, 3.5vw);
  line-height: 2.375rem;
  margin-bottom: ${({ button }) => (button ? '0' : '1.875rem')};
  padding: 0.3125rem;
  color: #c4c4c4;
`

export const ButtonSytle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: 25rem;
  height: 4rem;
  padding: 1rem 3rem;
  border-radius: 4px;
  border: 0.125rem solid #00df5e;
  background-color: transparent;
  font-size: 1.125rem;
  cursor: pointer;
  position: relative;
  color: #00df5e;
  text-decoration: none;

  @media screen and (max-width: 880px) {
    width: 18.75rem;
    font-size: 1rem;
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
      top: 3.125rem;
      background: transparent;
      height: 50%;
      width: 100%;
      transform: perspective(1rem) rotateX(40deg) scale(1, 0.35);
      filter: blur(0.5rem);
      transition: 1 ease;
    }

    &:hover::before {
      background: #00df5e;
      top: 4.375rem;
    }

    &:active {
      background: none;
    }

    @media screen and (max-width: 375px) {
      width: 16.875rem;
      font-size: 0.875rem;

      &::before {
        content: '';
        position: absolute;
        left: 3.75rem;
        top: 3.125rem;
        background: transparent;
        height: 50%;
        width: 55%;
        transform: perspective(1rem) rotateX(40deg) scale(1, 0.35);
        filter: blur(0.5rem);
        transition: 1 ease;
      }
    }
  }
`

export const Button = styled(ButtonSytle)`
  &:hover {
    margin-bottom: 3rem;
  }
`

export const ButtonWhatsapp = styled(ButtonSytle)`
  width: 20rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 880px) {
    width: 16.75rem;
    font-size: 0.9rem;
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    width: 14rem;
    font-size: 0.875rem;

    &::before {
      content: '';
      position: absolute;
      left: 2.75rem;
      top: 2.125rem;
    }
  }
`
