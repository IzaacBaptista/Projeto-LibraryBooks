import axios from 'axios';

const favoritosAPI = axios.create({
    baseURL: 'http://localhost:8000/favoritos',
});

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id) {
    const response = await favoritosAPI.post(`/${id}`);
    return response.data;
}

async function deleteFavorito(id) {
    const response = await favoritosAPI.delete(`/${id}`);
    return response.data;
}

export { getFavoritos, postFavorito, deleteFavorito };