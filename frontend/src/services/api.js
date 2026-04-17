import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

// 🔹 Get all books
export const getBooks = () => {
  return axios.get(`${BASE_URL}/books/`);
};

// 🔹 Get single book
export const getBook = (id) => {
  return axios.get(`${BASE_URL}/books/${id}/`);
};

// 🔹 Add new book
export const addBook = (data) => {
  return axios.post(`${BASE_URL}/add-book/`, data);
};

// 🔹 Scrape books
export const scrapeBooks = () => {
  return axios.post(`${BASE_URL}/scrape/`);
};

// 🔹 Get summary
export const getSummary = (id) => {
  return axios.get(`${BASE_URL}/summary/${id}/`);
};

// 🔹 Get genre
export const getGenre = (id) => {
  return axios.get(`${BASE_URL}/genre/${id}/`);
};

// 🔹 Get recommendations
export const getRecommendations = (id) => {
  return axios.get(`${BASE_URL}/recommend/${id}/`);
};

// 🔹 Ask AI question
export const askQuestion = (question) => {
  return axios.post(`${BASE_URL}/query/`, { question });
};
