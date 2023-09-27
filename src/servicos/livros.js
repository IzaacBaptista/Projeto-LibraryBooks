import axios from 'axios';
// import { response } from 'express';

const livrosAPi = axios.create({
    baseURL: 'http://localhost:8000/livros',
});

async function getLivros() {
    const response = await livrosAPi.get('/')

    return response.data
}

function getLivro(id) {
    const response = livrosAPi.get(`/${id}`);
    return response.data;
}

function postLivros() {
    const response = livrosAPi.post('/');
    return response.data;
}

function patchLivro(id) {
    const response = livrosAPi.patch(`/${id}`);
    return response.data;
}

function deleteLivros(id) {
    const response = livrosAPi.delete(`/${id}`);
    return response.data;
}

export { getLivros, getLivro, postLivros, patchLivro, deleteLivros };