import axios from "axios";

const defaultUrl = "https://api.themoviedb.org/3";
const key = "3ee4bf29d51c4797170e2c7ed5a212b8";

export const getHomePage = () =>
  axios.get(`${defaultUrl}/trending/movie/day?api_key=${key}`);

export const getMovieDetailsPage = (id) =>
  axios.get(`${defaultUrl}/movie/${id}?api_key=${key}&language=en-US`);

export const getCast = (id) =>
  axios.get(`${defaultUrl}/movie/${id}/credits?api_key=${key}`);

export const getReviews = (id) =>
  axios.get(`${defaultUrl}/movie/${id}/reviews?api_key=${key}`);

export const getMoviesPage = (query = "") =>
  axios.get(
    `${defaultUrl}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
