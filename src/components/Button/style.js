import styled from 'styled-components'

export const IsButton = styled.a`
  width: ${props => (props.cardButton ? '6.25rem' : '8.125rem')};
  height: 2.625rem;
  border: 0.0625rem solid #00df5e;
  border-radius: 0.4375rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;

  font-style: normal;
  font-weight: 600;
  font-size: ${props => (props.cardButton ? '0.875rem' : '1rem')};
  line-height: 19px;

  color: ${props => (props.cardButton ? '#00df5e' : '#ffffff')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1.75rem #00df5e, 0 0 3.125rem #fff;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &:active {
    box-shadow: none;
  }
`
