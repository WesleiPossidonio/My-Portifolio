import React from 'react'

import { ContainerInput, Input, Label, TextArea } from '../style'

export const InputBriefindHome = () => {
  return (
    <ContainerInput>
      <Label htmlFor="name">
        Qual é o seu nome e o nome da sua empresa?
        <Input
          placeholder="Ex: Marcos - Loja de Roupas"
          type="text"
          id="name"
        />
      </Label>

      <Label htmlFor="name">
        Qual o produto ou serviço que sua empresa vende ?
        <Input placeholder="ex: roupas, consultoria" type="text" id="name" />
      </Label>

      <Label htmlFor="descrption">
        Descrição sobre a empresa
        <TextArea
          placeholder="ex: Escreva um resumo sobre a empresa para colocarmos no campo de sobre nós"
          id="descrption"
        />
      </Label>

      <Label htmlFor="name">
        Como vôce pesquisaria a sua empresa no google?
        <Input placeholder="Escritório de Advocacia" type="text" id="name" />
      </Label>

      <Label htmlFor="about">
        Textos instrutivos relacionados as categorias ou tipos de serviços
        <TextArea
          placeholder="ex: Direito penal: Realizada por profissionais capacitados para prestar consultoria juridica na área e atuar nos mais diversos casos..."
          id="about"
        />
      </Label>

      <Label htmlFor="privacidade">
        Política de Privacidade. trocas e devoluções
        <TextArea
          placeholder="ex: Muito mais que um escritório, seu parceiro de negócios"
          type="text"
          id="privacidade"
        />
      </Label>
    </ContainerInput>
  )
}
