import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  display: ${({ menuMobileVisible }) => (menuMobileVisible ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  background-color: #121212;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(3.125rem);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #00df5e;
    transform: rotate(45deg);
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0.5rem);

      > svg {
        transform: rotate(0deg);
        transition: 0.7s;
      }
    `}
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`

export const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.375rem;
  cursor: pointer;

  color: #00df5e;
`
