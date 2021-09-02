const API_BASE = 'https://www.omdbapi.com/?apikey=6eb88652';
export const fetchMovie = id => {
  return fetch(`${API_BASE}&i=${id}`).then(response => response.json());
};
export const fetchRandomMovies = query => {
  return fetch(`${API_BASE}&s=${query || 'happy'}`).then(response => response.json());
};
