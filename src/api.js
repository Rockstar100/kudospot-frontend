
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const fetchKudos = async () => {
  const response = await axios.get(`${API_URL}/kudos`);
  return response.data;
};

export const sendKudos = async (data) => {
  const response = await axios.post(`${API_URL}/kudos`, data);
  return response.data;
};
