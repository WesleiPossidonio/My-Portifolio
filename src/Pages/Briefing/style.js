import {
  StepConnector,
  stepConnectorClasses,
  styled as muiStyled
} from '@mui/material'
import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  height: max-content;

  padding: 5rem 0;

  background: #0c0c0c;

  .stepper {
    margin-top: 3rem;
  }
`

export const HeaderPage = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
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
