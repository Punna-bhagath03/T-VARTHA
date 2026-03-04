import axios from 'axios';
import { NewsItem } from '../types/news';

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api' });

export const fetchNews = async (): Promise<NewsItem[]> => {
  const response = await api.get<NewsItem[]>('/news');
  return response.data;
};

export const createNews = async (formData: FormData): Promise<NewsItem> => {
  const response = await api.post<NewsItem>('/news', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
};

export default api;
