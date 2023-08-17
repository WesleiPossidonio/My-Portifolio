import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 85%;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  font-size: 1.2rem;
  margin-bottom: 1.5rem;

  color: #00df5e;
`

export const Input = styled.input`
  width: 100%;

  border: 2px solid #000;
  border-radius: 4px;

  padding: 1rem;

  color: #f5f5f5;

  background: #000;

  &:focus {
    border: 2px solid #00df5e;
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 7rem;

  border: 2px solid #000;
  border-radius: 4px;

  padding: 1rem;

  color: #f5f5f5;

  background: #000;

  &:focus {
    border: 2px solid #00df5e;
  }
`
