import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const fetchProjects = () => API.get('v1/projects/get-projects').then(res => res.data);
export const fetchProjectById = (id) => API.get(`/projects/${id}`).then(res => res.data);
export const sendContactMessage = (data) => API.post('/contact', data);
