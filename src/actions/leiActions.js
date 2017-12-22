import axios from "axios";

const REQUEST_URL = 'http://localhost:8000/api/v1';

export const fetchLeis = () => {
  const request = axios.get(`${REQUEST_URL}/lei`);

  return {
    type: 'FETCH_LEIS',
    payload: request
  }
};