import axios from 'axios';
// import { response } from 'express';

const livrosAPi = axios.create({
    baseURL: 'http://localhost:8000/livros',
});

async function getLivros() {
    const response = await livrosAPi.get('/')

    return response.data
}

async function getLivro(id) {
    const response = await livrosAPi.get(`/${id}`);
    return response.data;
}

async function postLivros() {
    const response = await livrosAPi.post('/');
    return response.data;
}

async function patchLivro(id) {
    const response = await livrosAPi.patch(`/${id}`);
    return response.data;
}

async function deleteLivros(id) {
    const response = await livrosAPi.delete(`/${id}`);
    return response.data;
}

export { getLivros, getLivro, postLivros, patchLivro, deleteLivros };