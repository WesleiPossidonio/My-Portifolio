import styled from 'styled-components'

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(24px, 6vw);
  margin-left: ${({ aboutMe }) => (aboutMe ? '0' : '1em')};
  text-align: ${({ aboutMe }) => (aboutMe ? '' : 'center')};
  line-height: 29px;
  text-transform: uppercase;
  margin-bottom: 35px;

  color: #00df5e;
`
