import api from './axios';

const API = {
    getAll: (genre) => {
        return api.get(`/?s=${genre}`)
    },
    getAllByTitle: (title) => {
        return api.get(`/?t=${title}`)
    }
}

export default API;