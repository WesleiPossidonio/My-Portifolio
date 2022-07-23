import styled from 'styled-components'

export const Section = styled.div`
  padding: 50px 0;
  min-height: max-content;
  width: 100%;
  background: #0c0c0c;
`

export const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 18px;
  justify-content: center;
  margin-top: 50px;
  margin-left: 45px;

  @media screen and (max-width: 320px) {
    margin-left: 5em !important;
  }
`

export const ContainerIcon = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  cursor: pointer;

  background-color: #212121;

  .icon {
    color: #00df5e;
    font-size: 80px;
    padding: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px #00df5e, 0 0 50px #fff;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  @media screen and (max-width: 320px) {
    margin-left: -1em;
  }
`
export const TextIcon = styled.p`
  color: #00df5e;
  font-weight: 600;
`
