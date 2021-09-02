import Vuex from 'vuex';
import movie from './movie';
import movies from './movies';


const store = new Vuex.Store({
  modules: {
    movies,
    movie,
  },
});

export default store;
