import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b',
  headers: {
    'Content-Type': 'application/json'
  }
});

const ENDPOINTS = {
  CURRENT_WEATHER: '/6981949143b1c97be9616e06',
  FORECAST: '/698194e3d0ea881f409cdb34',
  ERROR: '/69819517ae596e708f0d49ff'
};

export default {
  async getCurrentWeather(city) {
    // Note: The API is a mock JSON, so the 'city' parameter 
    // won't actually filter the result on the server side.
    // We return the static data but could filter client-side if the mock had more data.
    // For this assignment, we just return the endpoint response.
    const response = await apiClient.get(ENDPOINTS.CURRENT_WEATHER);
    return response.data.record.data;
  },
  async getForecast(city) {
    const response = await apiClient.get(ENDPOINTS.FORECAST);
    return response.data.record.data;
  },
  async simulateError() {
    const response = await apiClient.get(ENDPOINTS.ERROR);
    return response.data;
  }
};
