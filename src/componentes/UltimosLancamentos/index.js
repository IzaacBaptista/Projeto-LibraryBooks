import React, { useEffect, useState } from 'react';
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
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyBy2BMf98ixSPXySoPpA46gkcbZReGPBhg';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${apiKey}`;


    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const booksData = data.items || [];
        setBooks(booksData);
      })
      .catch((error) => {
        console.error('Error fetching data from Google Books API:', error);
      });
  }, []);

  return (
    <section>
      <Titulo>ULTIMOS LANCAMENTOS</Titulo>
      <UltimosLancamentosContainer>
        {books.map((book, index) => (
          <LivroContainer key={index}>
            {book.volumeInfo.imageLinks && (
              <img src={book.volumeInfo.imageLinks.smallThumbnail || book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            )}
            <LivroItem>Nome: {book.volumeInfo.title}</LivroItem>
            <LivroItem>Autor: {book.volumeInfo.authors}</LivroItem>
            <LivroItem>Categoria: {book.volumeInfo.categories}</LivroItem>
            <LivroItem>Páginas: {book.volumeInfo.pageCount}</LivroItem>
          </LivroContainer>
        ))}
      </UltimosLancamentosContainer>
    </section>
  );
}

export default UltimosLancamentos;
