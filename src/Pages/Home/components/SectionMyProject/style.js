import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 8rem 0;
  background: #0c0c0c;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ButtonTypeProject = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: #00df5e;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #c4c4c4;
  }
`
