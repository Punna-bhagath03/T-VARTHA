import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api' });
export const fetchNews = async () => {
    const response = await api.get('/news');
    return response.data;
};
export const createNews = async (formData) => {
    const response = await api.post('/news', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
export default api;
