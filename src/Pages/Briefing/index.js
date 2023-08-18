import { yupResolver } from '@hookform/resolvers/yup'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import SettingsIcon from '@mui/icons-material/Settings'
import VideoLabelIcon from '@mui/icons-material/VideoLabel'
import { Stack } from '@mui/material'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { apiSendEmail } from '../../services/api'
import { InputAboutProject } from './components/inputAboutProject'
import { InputsFinal } from './components/InputFinal'
import { InputBriefindHome } from './components/inputHome'
import {
  Button,
  ColorlibConnector,
  ColorlibStepIconRoot,
  ContainerButton,
  Form,
  Header,
  HeaderPage,
  SectionContainer,
  SubTitle,
  TextLabel,
  TitlePage
} from './style'

const schema = yup.object({
  companyName: yup.string().required(),
  productOrService: yup.string().required(),
  companyDescription: yup.string().required(),
  googleSearch: yup.string().required(),
  textCategoryAndService: yup.string().required(),
  privacyPolicy: yup.string().required(),
  serverHosting: yup.string().required(),
  numberOfPagesWebsite: yup.string().required(),
  linksSitesInspiration: yup.string().required(),
  sloganBanner: yup.string().required(),
  photosAndMaterials: yup.string().required(),
  logosAndColors: yup.string().required(),
  ContactPhone: yup.string().required(),
  contactWhatsapp: yup.string().required(),
  emailContact: yup.string().required(),
  linksSocialNetworks: yup.string().required(),
  websiteDomain: yup.string().required(),
  unlistedInformation: yup.string()
})

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

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

  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }

  const onSubmitForm = async data => {
    await toast.promise(apiSendEmail.post('sendMail', data), {
      pending: 'Enviando Dados',
      success: 'Dados Enviados com Sucesso!',
      error: 'Error verifique seus dados 🤯'
    })

    reset()
  }

  return (
    <>
      {' '}
      <Header>
        <h2 onClick={handleNavigateToHome}>Weslei França</h2>
        <h3 onClick={handleNavigateToHome}>Ir ao Site</h3>
      </Header>
      <SectionContainer>
        <HeaderPage>
          <TitlePage>Briefing</TitlePage>
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

        <Form onSubmit={handleSubmit(onSubmitForm)}>
          {(positionSteps === 0 && (
            <InputBriefindHome register={register} errors={errors} />
          )) ||
            (positionSteps === 1 && (
              <InputAboutProject register={register} errors={errors} />
            )) ||
            (positionSteps === 2 && (
              <InputsFinal register={register} errors={errors} />
            ))}

          <ContainerButton>
            <Button type="button" onClick={handleNavigatetoGoToBackForms}>
              Voltar
            </Button>

            <Button
              type={positionSteps === 2 ? 'submit' : 'button'}
              onClick={handleNavigateForms}
            >
              {positionSteps === 2 ? 'Enviar' : 'Próximo'}
            </Button>
          </ContainerButton>
        </Form>
      </SectionContainer>
    </>
  )
}
