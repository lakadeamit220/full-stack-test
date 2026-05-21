import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchTabs = async () => {
  const response = await axios.get(`${API_URL}/tabs`);
  return response.data;
};

export const fetchSlides = async () => {
  const response = await axios.get(`${API_URL}/slides`);
  return response.data;
};
