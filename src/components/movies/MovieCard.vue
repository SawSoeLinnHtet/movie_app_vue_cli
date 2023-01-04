<template>
  <div
    v-for="movie in movies"
    :key="movie.id"
    class="col-6 col-sm-4 col-md-3 col-lg-3 mb-3"
  >
    <div class="img-wrap">
      <router-link :to="`/details/${ movie.id }`" class="poster-wrap">
        <img
          :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          alt=""
          class="img-fluid"
        />
        <button class="btn btn-outline-success btn-sm bg-dark text-warning rating-area d-flex disabled">
          <i class="ri-star-fill mr-1"></i>{{ movie.vote_average }}
        </button>
      </router-link>
    </div>
    <div class="card-text w-auto d-flex flex-wrap flex-column">
      <div class="px-2 py-0">
        <span class="h5 title text-yellow mt-1 mb-2">{{ movie.title }}</span>
        <hr class="border-none bg-dark"/>
        <div class="d-flex flex-wrap flex-column justify-content-between px-1">
           <span class="info-text mb-1 text-lime d-flex">
            <span class="info-title text-light">
              <i class="ri-calendar-todo-fill h6 mt-3"></i>
            </span> {{
            moment(movie.release_date).format("dddd, MMM YYYY")
          }}</span>
          <span class="info-text mb-1 text-lime d-flex">
            <span class="info-title text-light">
              <i class="ri-bar-chart-grouped-fill  h6 mt-3"></i></span
            >{{ movie.popularity }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from "moment";

  export default { 
    data() {
      return {
        moment: moment,
      }
    },
    props: {
      movies: {
        type: Object,
        required: true 
      },
      animateSpeed: {
        type: Number,
        required: false,
        default: 10000,
      },
    },
  }
</script>