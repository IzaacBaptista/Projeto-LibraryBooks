import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritos';
import { Titulo } from '../componentes/Titulo';

const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

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

const FavoritosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos()
        setFavoritos(favoritosDaAPI)
    }

    useEffect(() => {
        fetchFavoritos()
    }, [])

    return (
        <AppContainer>
            <Titulo>LIVROS FAVORITOS</Titulo>
            <FavoritosContainer>
                {favoritos.map((favorito, index) => (
                    <LivroContainer key={index}>
                    <img src={favorito.src} alt={favorito.nome} />
                    <LivroItem>Nome: {favorito.nome}</LivroItem>
                    <LivroItem>Autor: {favorito.autor}</LivroItem>
                    <LivroItem>Categoria: {favorito.categoria}</LivroItem>
                    <LivroItem>Páginas: {favorito.paginas}</LivroItem>
                </LivroContainer>
                ))}
            </FavoritosContainer>
        </AppContainer>
    );
}

export default Favoritos