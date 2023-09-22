import React from 'react';
import { livros } from './ultimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';

const LivroContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #FFF;
  border-radius: 10px;
  text-align: center;
  min-width: 200px;
`;

const LivroItem = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

const UltimosLancamentosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function UltimosLancamentos() {
  return (
    <section>
      <Titulo>ULTIMOS LANCAMENTOS</Titulo>
      <UltimosLancamentosContainer>
        {livros.map((livro, index) => (
          <LivroContainer key={index}>
            <img src={livro.src} alt={livro.nome} />
            <LivroItem>Nome: {livro.nome}</LivroItem>
            <LivroItem>Autor: {livro.autor}</LivroItem>
            <LivroItem>Categoria: {livro.categoria}</LivroItem>
            <LivroItem>Páginas: {livro.paginas}</LivroItem>
          </LivroContainer>
        ))}
      </UltimosLancamentosContainer>
    </section>
  );
}

export default UltimosLancamentos;
