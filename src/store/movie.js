import { fetchMovie } from '../api';
import {
  MOVIE_FETCH_BY_ID,
  MOVIE_FETCH_START,
  MOVIE_FETCH_END,
  FETCH_ERROR,
  MOVIE_FAVE,
  MOVIE_FAVE_COMMIT,
} from './mutations.type';

const FAVS_KEY = 'favourites';
if (!localStorage.getItem(FAVS_KEY)) {
  localStorage.setItem(FAVS_KEY, '{}');
}

const state = {
  data: null,
  isLoading: true,
  error: null,
};

const actions = {
  [MOVIE_FETCH_BY_ID]({ commit }, id) {
    commit(MOVIE_FETCH_START);
    return fetchMovie(id)
      .then(movie => {
        commit(MOVIE_FETCH_END, movie);
      })
      .catch(error => {
        commit(FETCH_ERROR, error);
      });
  },
  [MOVIE_FAVE]({ commit }, imdbID) {
    commit(MOVIE_FAVE_COMMIT, imdbID);
  },
};

const mutations = {
  [MOVIE_FETCH_START](state) {
    state.error = null;
    state.data = null;
    state.isLoading = true;
  },
  [MOVIE_FETCH_END](state, movie) {
    const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
    state.data = {
      ...movie,
      _isFav: favsFromStorage[movie.imdbID],
    };
    state.isLoading = false;
    state.error = null;
  },
  [FETCH_ERROR](state, error) {
    state.error = error;
    state.isLoading = false;
    state.data = null;
  },
  [MOVIE_FAVE_COMMIT](state, imdbID) {
    const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
    if (!state.data._isFav) {
      state.data._isFav = true;
      favsFromStorage[imdbID] = state.data;
    } else {
      state.data._isFav = false;
      delete favsFromStorage[imdbID];
    }
    localStorage.setItem(FAVS_KEY, JSON.stringify(favsFromStorage));
  },
};

const getters = {
  movieData(state) {
    return state.data;
  },
  movieIsLoading(state) {
    return state.isLoading;
  },
  movieError(state) {
    return state.error;
  },
};

export default {
  state,
  // getters,
  actions,
  mutations
};
