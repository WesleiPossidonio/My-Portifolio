import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #00df5e;
  padding: 40px;
  background: #0c0c0c;
  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: min(16px, 4.9vw);
  line-height: 36px;
  color: #00df5e;
  @media screen and (max-width: 660px) {
    margin-top: 2px;
    order: 2;
  }
`

export const LinkContact = styled.a`
  font-weight: 600;
  font-size: 20px;
  color: #00df5e;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  @media screen and (max-width: 660px) {
    margin-top: 10px;
    order: 1;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
