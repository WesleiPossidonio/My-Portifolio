import styled from 'styled-components'

export const ContainerSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.625rem, 7.5rem));
  gap: 2.5rem;
  justify-content: center;

  margin: auto;
  padding: 3.125rem 0;
  min-height: max-content;
  width: 100%;

  > h1 {
    font-size: 1rem;
    text-align: start;
  }
`

export const ContainerIcon = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: #212121;

  .icon {
    color: #00df5e;
    font-size: 3.75rem;
    padding: 0.625rem;
  }

  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0 1.5625rem #00df5e, 0 0 3.125rem #fff;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
export const TextIcon = styled.p`
  color: #00df5e;
  font-weight: 600;
  font-size: 0.9rem;
`
