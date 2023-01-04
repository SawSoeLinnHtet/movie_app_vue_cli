<template>
  <div class="details-container">
    <div class="backdrop-path" v-bind:style="{ 'background-image': 'url('+ img_path + movies.details.backdrop_path +')' }">
      <div class="custom-bg">
        <div class="container-fluid p-5">
          <div class="row">
            <div class="col-12 col-lg-3">
              <img :src="img_path +  movies.details.poster_path" class="img-fluid poster" alt="original poster">
            </div>
            <div class="col-12 col-lg-9">
              <span class="h2 font-weight-bold text-white d-block mb-2">
                {{  movies.details.original_title }}
              </span>
              <div class="details_function d-flex align-items-center">
                <RadialProgress 
                  diameter="80"
                  stroke-width="5"
                  inner-stroke-width="5"
                  :completed-steps=" movies.details.vote_average"
                  animate-speed="10" 
                  class="text-white h6 font-weight-bold"
                >
                  {{ Math.round( movies.details.vote_average * 10) }} %
                </RadialProgress>
                <a href="#" class="btn btn-dark ml-3 rounded-circle">
                  <i class="ri-heart-fill h6"></i>
                </a>
                <a href="#" class="btn btn-dark ml-3 rounded-circle">
                  <i class="ri-list-unordered"></i>
                </a>
                <a href="#" class="btn btn-dark ml-3 rounded-circle">
                  <i class="ri-bookmark-fill"></i>
                </a>
              </div>
              <span class="d-flex align-items-center text-white font-weight-normal">
                <span class="mr-3 mt-1">
                  <i class="ri-calendar-event-fill h4 text-warning"></i>
                </span>{{ moment( movies.details.release_date).format("dddd, MMMM Do YYYY") }}
              </span>
              <span class="d-flex align-items-center text-white font-weight-normal d-flex ">
                <span class="mr-3 mt-1">
                  <i class="ri-time-line h4 text-warning"></i>  
                </span>
                {{  movies.details.runtime }} Min
              </span>
              <ul class="list-unstyled">
                <li v-for="genres in  movies.details.genres" :key="genres.id" class="d-inline-block mr-3 mt-2">
                  <span class="btn btn-outline-light rounded-pill btn-sm">
                    {{ genres.name }}
                  </span>
                </li>
              </ul>
              <span class="h6 text-white mt-3 mb-3 d-block text-warning">
                Production Companies : 
                <span 
                  v-for="company in  movies.details.production_companies"           
                  :key="company.name" 
                  class="text-white"
                >
                {{ company.name }}, 
                </span>
              </span>
              <span class="h6 text-white mt-3 mb-3 d-block text-warning">
                Production Countries : 
                <span 
                  v-for="country in movies.details.production_countries"           
                  :key="country.name" class="text-white"
                >
                  {{ country.name }}
                </span>
              </span>
              <p class="h5 text-warning font-weight-bold">
                OverView
              </p>
              <hr class="bg-white">
              <span class="h6 text-yellow">
                {{ movies.details.overview }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useMoviesStore } from '@/stores/MoviesStore';
  import moment from 'moment';
  import RadialProgress from "vue3-radial-progress";
  
  export default {
    data() {
      return {
        moment: moment,
        img_path: "https://image.tmdb.org/t/p/original",   
      }
    },
    mounted() {
      // this.getDetail()
      this.movies.getMovieById( this.$route.params.movie_id )
    },
    components: {
      RadialProgress  
    },
    setup() {
      let movies = useMoviesStore()

      return {
        movies
      }
    },
  }
</script>
<style scoped>
  .details-container{
    padding-top: 56px;
  }
  .backdrop-path{
    width:100%;
    min-height: auto;
    background-size: cover;
    background-position: left calc((50vw - 170px) - 340px) top;
    background-repeat: no-repeat;
    opacity: 0.8;
    margin-top: 50px;
    margin-bottom: 50px;
    color: rgba(129, 182, 34, .4);
  }
  .custom-bg{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1) calc((50vw - 170px) - 340px), rgba(0, 0, 0, .6) 30%, rgba(0, 0, 0, .5) 100%);
  }
  .poster{
    max-height: 430px;
    border-radius: 10px;
  }
</style>

