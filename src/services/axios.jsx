import Axios from "axios";

// Membuat Axios Instance
const api = Axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BASEURL_YOUTUBEAPI,
    params: {
        apikey: import.meta.env.VITE_PUBLIC_API_KEY_YOUTUBEAPI,
    }
})

// Membuat Axios Intercepators
api.interceptors.request.use((config) => {
     // Lakukan sesuatu sebelum permintaan dikirim
    console.log('config', config)
    return config
}, (error) => {
    // Tangani kesalahan permintaan
    return Promise.reject(error)
})


api.interceptors.response.use((config) => {
    // Lakukan sesuatu ketika response diterima
    console.log('response axios :', config)
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

export default api;