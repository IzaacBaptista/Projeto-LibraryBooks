import styled from 'styled-components'
import Input from '../Input'

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

function Pesquisa () {
    return(
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro na estante</Subtitulo>
        <Input />
      </PesquisaContainer>
    )
}

export default Pesquisa