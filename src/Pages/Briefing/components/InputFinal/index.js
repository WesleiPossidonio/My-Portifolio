import React from 'react'

import { ContainerInput, Input, Label, TextArea } from '../style'

export const InputsFinal = () => {
  return (
    <ContainerInput>
      <Label htmlFor="name">
        Telefones para contato
        <Input
          placeholder="Ex: (22) 9 0000-0000 e (22) 9 0000-0000"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        Whatsapps para contatos
        <Input
          placeholder="(22) 9 0000-0000 e (22) 9 0000-0000"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        E-mail para contato
        <Input
          placeholder="ex: weslei.possidonio@gmail.com"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        Links das redes sociais
        <Input
          placeholder="Instagram, facebook, tiktok e outros"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        Você registrou um nome de domínio para o seu site ?
        <Input
          placeholder="Se sim, mande o login e senha para acessá-lo"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        Existe alguma informação não listada aqui que você gostaria de listar ?
        <TextArea placeholder="Digite Aqui" type="text" id="name" />
      </Label>
    </ContainerInput>
  )
}
