import {
  StepConnector,
  stepConnectorClasses,
  styled as muiStyled
} from '@mui/material'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  background: #121212;
  z-index: 10;

  h2 {
    font-size: 1.2rem;
    color: #00df5e;
  }

  h3 {
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

      display: block;
      background: #00df5e;
      transition: 400ms;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const SectionContainer = styled.section`
  width: 100%;
  height: max-content;

  padding: 5rem 0;

  background: #0c0c0c;
  overflow-y: scroll;

  .stepper {
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const HeaderPage = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  @media (max-width: 600px) {
    margin-top: 2.5rem;
  }
`

export const TitlePage = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;

  text-align: center;

  color: #00df5e;
`

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
  color: #fff;
`

export const TextLabel = styled.p`
  color: #fff;
`

export const ColorlibConnector = muiStyled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#00df5e'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#00df5e'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}))

export const ColorlibStepIconRoot = muiStyled('div')(
  ({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#00df5e',
      color: '#000',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    }),
    ...(ownerState.completed && {
      backgroundColor: '#00df5e'
    })
  })
)

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerButton = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Button = styled.button`
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
