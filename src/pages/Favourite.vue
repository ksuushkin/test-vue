<template>
    <Header />
    <!-- <Search /> -->
    <MoviesComponent />
</template>

<script>
import { MOVIES_FETCH_FAVS } from '../store/mutations.type';
import MoviesComponent from '../components/Movies.vue'
import Search from '../components/Search.vue'
import Header from '../components/Nav.vue';

export default {
  components: {
    MoviesComponent,
    Search,
    Header,
  },
  mounted() {
    this.fetchFavourites();
  },
  methods: {
    fetchFavourites() {
      //MOVIES_GET_FAVES
      this.$store.dispatch(MOVIES_FETCH_FAVS);
    },
  },
 
};
</script>
