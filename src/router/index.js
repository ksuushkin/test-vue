import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '/src/pages/Catalog.vue';
import Movie from '/src/pages/Movie.vue';
import Favourite from '/src/pages/Favourite.vue';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  }, 
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    children: [
      // при совпадении пути с шаблоном /movie/:imdbID
      // в <router-view> компонента Movie будет показан Movie
      { path: ":imdbID", component: Movie },
    ],
  }, 
  {
    path: '/favourite',
    name: 'Favourite',
    component: Favourite,
  }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
