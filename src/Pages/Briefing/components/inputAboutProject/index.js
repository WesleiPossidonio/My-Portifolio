import PropTypes from 'prop-types'
import React from 'react'

import { ContainerInput, Input, Label, TextArea } from '../style'

export const InputAboutProject = ({ register, errors }) => {
  return (
    <ContainerInput>
      <Label htmlFor="name">
        Você tem um servidor de hopedagem ?
        <Input
          placeholder="Se sim, me mande o login e senha para acessá-lo"
          type="text"
          id="name"
          {...register('serverHosting')}
        />
      </Label>
      <Label htmlFor="name">
        Quantas páginas e quais o site terá ?
        <Input
          placeholder="Ex: 4 Páginas - home, sobre, contato, blog..."
          type="text"
          id="name"
          {...register('numberOfPagesWebsite')}
        />
      </Label>

      <Label htmlFor="name">
        Links de 3 sites que você tenha gostado e queira se inspirar
        <Input
          placeholder="ex: mercadolivre.com.br"
          type="text"
          id="name"
          {...register('linksSitesInspiration')}
        />
      </Label>

      <Label htmlFor="name">
        Slogan ou chamada para banner
        <TextArea
          placeholder="Pode colocar aqui o link do google driver contendo todas as imagens ou me enviar por E-mail"
          type="text"
          id="name"
          {...register('sloganBanner')}
        />
      </Label>

      <Label htmlFor="name">
        Fotos e material visual que será usado
        <Input
          placeholder="Pode colocar aqui o link do google driver contendo todas as imagens ou me enviar por E-mail"
          type="text"
          id="name"
          {...register('photosAndMaterials')}
        />
      </Label>

      <Label htmlFor="name">
        Você tem padrões existentes, como logos cores, que devem ser
        incorporados?
        <Input
          placeholder="Se sim, me mande o link desses arquivos em um driver, ou envie por email."
          type="text"
          id="name"
          {...register('logosAndColors')}
        />
      </Label>
    </ContainerInput>
  )
}

InputAboutProject.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.func
}
