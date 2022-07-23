import styled from 'styled-components'

export const IsButton = styled.a`
  width: ${props => (props.cardButton ? '100px' : '130px')};
  height: 42px;
  border: 1px solid #00df5e;
  border-radius: 7px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-style: normal;
  font-weight: 600;
  font-size: ${props => (props.cardButton ? '14px' : '16px')};
  line-height: 19px;

  color: ${props => (props.cardButton ? '#00df5e' : '#ffffff')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 25px #00df5e, 0 0 50px #fff;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &:active {
    box-shadow: none;
  }
`
