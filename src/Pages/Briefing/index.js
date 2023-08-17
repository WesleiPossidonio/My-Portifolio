// import { yupResolver } from '@hookform/resolvers/yup'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import SettingsIcon from '@mui/icons-material/Settings'
import VideoLabelIcon from '@mui/icons-material/VideoLabel'
import { Stack } from '@mui/material'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'

import { IsButton } from '../../components/Button/style'
import { InputAboutProject } from './components/inputAboutProject'
import { InputsFinal } from './components/InputFinal'
import { InputBriefindHome } from './components/inputHome'
import {
  ColorlibConnector,
  ColorlibStepIconRoot,
  ContainerButton,
  Form,
  HeaderPage,
  SectionContainer,
  SubTitle,
  TextLabel,
  TitlePage
} from './style'

// const schema = yup
//   .object({
//     name: yup.string().required(),
//     age: yup.number().positive().integer().required()
//   })
//   .required()

function ColorlibStepIcon(props) {
  const { active, completed, className } = props

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
}

const steps = ['Sobre a Empresa', 'Sobre o Projeto', 'últimas informações']

export const Briefind = () => {
  const [positionSteps, setPositionSteps] = useState(0)
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors }
  //   } = useForm({
  //     resolver: yupResolver(schema)
  //   })

  //   const onSubmit = data => console.log(data)

  const handleNavigateForms = () => {
    const sumSteps = positionSteps + 1

    const finalValue = Math.min(sumSteps, 2)

    setPositionSteps(finalValue)

    console.log(positionSteps)
  }

  const handleNavigatetoGoToBackForms = () => {
    const sumSteps = positionSteps >= 1 && positionSteps - 1

    const finalValue = Math.min(sumSteps, 1)

    setPositionSteps(finalValue)

    console.log(positionSteps)
  }

  return (
    <SectionContainer>
      <HeaderPage>
        <TitlePage>Briefind</TitlePage>
        <SubTitle>
          Preencha o formulário abaixo para criarmos o seu projeto!
        </SubTitle>
      </HeaderPage>

      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={positionSteps}
          connector={<ColorlibConnector />}
          className="stepper"
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <TextLabel>{label}</TextLabel>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>

      <Form>
        {(positionSteps === 0 && <InputBriefindHome />) ||
          (positionSteps === 1 && <InputAboutProject />) ||
          (positionSteps === 2 && <InputsFinal />)}

        <ContainerButton>
          <IsButton type="button" onClick={handleNavigatetoGoToBackForms}>
            Voltar
          </IsButton>

          <IsButton
            type={positionSteps === 2 ? 'submit' : 'button'}
            onClick={handleNavigateForms}
          >
            {positionSteps === 2 ? 'Enviar' : 'Próximo'}
          </IsButton>
        </ContainerButton>
      </Form>
    </SectionContainer>
  )
}
