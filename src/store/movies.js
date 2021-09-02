import { fetchRandomMovies } from '../api';
import {
  MOVIES_FETCH,
  MOVIES_FETCH_START,
  MOVIES_FETCH_END,
  FETCH_ERROR,
  MOVIES_FAVE,
  MOVIES_FAVE_COMMIT,
  MOVIES_FETCH_FAVS,
  MOVIES_FETCH_FAVS_END,
} from './mutations.type';

const FAVS_KEY = 'favourites';
if (!localStorage.getItem(FAVS_KEY)) {
  localStorage.setItem(FAVS_KEY, '{}');
}

export default {
  state: {
    data: [],
    isLoading: false,
    error: null,
  },
  actions: {
    [MOVIES_FETCH]({ commit }, query) {
      commit(MOVIES_FETCH_START);
      return fetchRandomMovies(query)
        .then(movies => {
          commit(MOVIES_FETCH_END, movies.Search || []);
        })
        .catch(error => {
          commit(FETCH_ERROR, error);
        });
    },
    [MOVIES_FAVE]({ commit }, imdbID) {
      commit(MOVIES_FAVE_COMMIT, imdbID);
    },
    [MOVIES_FETCH_FAVS]({ commit }) {
      const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
      commit(MOVIES_FETCH_FAVS_END);
    },
  },
  mutations: {
    [MOVIES_FETCH_START](state) {
      state.error = null;
      state.data = [];
      state.isLoading = true;
    },
    [MOVIES_FETCH_END](state, movies) {
      const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
      state.data = movies.map(item => {
        return {
          ...item,
          _isFav: favsFromStorage[item.imdbID],
        };
      });
      state.isLoading = false;
      state.error = null;
    },
    [FETCH_ERROR](state, error) {
      state.error = error;
      state.isLoading = false;
      state.data = [];
    },
    [MOVIES_FAVE_COMMIT](state, imdbID) {
      const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
      console.log('state.data movies',state.data);
      state.data = state.data.map(item => {
        if (item.imdbID === imdbID) {
          item._isFav = !item._isFav;
          if (item._isFav) {
            favsFromStorage[imdbID] = item;
          } else {
            delete favsFromStorage[imdbID];
          }
        }
        return item;
      });
      localStorage.setItem(FAVS_KEY, JSON.stringify(favsFromStorage));
    },
    [MOVIES_FETCH_FAVS_END](state) {
      const favsFromStorage = JSON.parse(localStorage.getItem(FAVS_KEY));
      const movies = [];
      for (let item in favsFromStorage) {
        movies.push(favsFromStorage[item]);
      }
      state.data = movies;
    },
  },
}
