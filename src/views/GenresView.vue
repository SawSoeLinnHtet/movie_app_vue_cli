<template>
  <div class="genres-container"> 
    <ul>
      <li v-for="genre in genresStore.genres" :key="genre.id">
        {{ genre.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useGenresStore } from '@/stores/GenresStore';

export default {
  setup() {
    const genresStore = useGenresStore()

    return {
      genresStore
    }
  },
  created() {
    this.genresStore.getGenres()
  }
}
</script>

<style scoped>
  .genres-container{
    color: #fff;
    padding-top: 56px;
    margin-top: 50px;
  }
</style>