import styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const InputContainer = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`
const Resposta = styled.p`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa () {
  const [ Livros, setLivros ] = useState('')
    return(
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro na estante</Subtitulo>
        <InputContainer 
          placeholder="Digite o nome do livro"
          onBlur={evento => setLivros(evento.target.value)}
        />
        <Resposta>{Livros}</Resposta>
      </PesquisaContainer>
    )
}

export default Pesquisa