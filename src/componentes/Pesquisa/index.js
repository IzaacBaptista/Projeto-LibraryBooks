import { useState } from 'react';
import styled from 'styled-components';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const InputContainer = styled.input`
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
`;

const LivroItem = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

const RespostaContainer = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: center; /* Center items horizontally */
`;

const LivroContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #FFF;
  border-radius: 10px;
  text-align: center;
  min-width: 200px;
`;

function Pesquisa() {
  const [livrosEncontrados, setLivrosEncontrados] = useState([]);

  const handleInputKeyPress = (evento) => {
    if (evento.key === 'Enter') {
      const valorDoInput = evento.target.value;
      const livrosEncontrados = livros.filter((livro) =>
        livro.nome.toLowerCase().includes(valorDoInput.toLowerCase())
      );
      setLivrosEncontrados(livrosEncontrados);
    }
  };

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro na estante</Subtitulo>
      <InputContainer
        placeholder="Digite o nome do livro"
        onKeyDown={handleInputKeyPress}
      />
      {livrosEncontrados.length > 0 ? (
        <RespostaContainer>
          {livrosEncontrados.map((livro, index) => (
            <LivroContainer key={index}>
              <img src={livro.src} alt={livro.nome} />
              <LivroItem>Nome: {livro.nome}</LivroItem>
              <LivroItem>Autor: {livro.autor}</LivroItem>
              <LivroItem>Categoria: {livro.categoria}</LivroItem>
              <LivroItem>Páginas: {livro.paginas}</LivroItem>
            </LivroContainer>
          ))}
        </RespostaContainer>
      ) : (
        <RespostaContainer>
          <p>Livro não encontrado</p>
        </RespostaContainer>
      )}
    </PesquisaContainer>
  );
}

export default Pesquisa;
