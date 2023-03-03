import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Header = styled.section`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #121212;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 880px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: #00df5e;
  cursor: pointer;

  @media screen and (max-width: 880px) {
    margin-left: 1rem;
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 880px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  cursor: pointer;

  color: #00df5e;

  &:after {
    content: '';
    width: 0px;
    height: 0.125rem;
    margin-top: 0.3125rem;

    display: block;
    background: #00df5e;
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }
`
export const Icon = styled.div`
  display: none;

  > svg {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    font-size: 2.1875rem;
    color: #00df5e;
    text-align: end;
  }

  @media screen and (max-width: 880px) {
    display: flex;
  }
`
