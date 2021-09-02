<template>
<header class="bg-gray-100">
  <nav class="flex items-center justify-between p-6 h-16 bg-white shadow-sm">
    <ul>
      <li class="space-x-5 text-xl">
          <router-link to="/" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700"> All Movies</router-link>
          <router-link to="/favourite" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700"> Favourite </router-link>
      </li>
    </ul>
  </nav>
</header>
</template>