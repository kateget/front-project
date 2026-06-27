import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTodos = () => apiClient.get('/todos/');
export const createTodo = (data: unknown) => apiClient.post('/todos/', data);
export const updateTodo = (id: string, data: unknown) => apiClient.put(`/todos/${id}/`, data);
export const deleteTodo = (id: string) => apiClient.delete(`/todos/${id}/`);
