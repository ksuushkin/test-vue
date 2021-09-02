<template>
  <Header />
  <MovieInfo :movie="movie" v-if="movie" />
  <div v-if="isLoading">
    ...
  </div>
</template>

<script>
import Header from '../components/Nav.vue';
import MovieInfo from '../components/MovieInfo.vue';
import { MOVIE_FETCH_BY_ID } from '../store/mutations.type';

export default {
  components: {
    Header,
    MovieInfo,
  },
  methods: {
    fetchMovie(imdbID) {
      this.$store.dispatch(MOVIE_FETCH_BY_ID, imdbID);
    },
  },
  computed: {
    movie() {
      return this.$store.state.movie.data;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
  },
  mounted() {
    this.fetchMovie(this.$route.params.imdbID);
  },
};
</script>
