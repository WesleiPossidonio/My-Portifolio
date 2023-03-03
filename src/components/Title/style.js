import styled from 'styled-components'

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(1.5rem, 6vw);
  margin-left: ${({ aboutMe }) => (aboutMe ? '0' : '1rem')};
  text-align: ${({ aboutMe }) => (aboutMe ? '' : 'center')};
  line-height: 1.8125rem;
  text-transform: uppercase;
  margin-bottom: 2.1875rem;

  color: #00df5e;
`
