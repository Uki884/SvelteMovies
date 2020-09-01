<script>
  import api from "@/api/axios.js";
  import MovieContent from "@/components/Organisms/MovieContent.svelte";
  import { onMount } from "svelte";
  let movies;
  let page = 1;
  const getMovie = async (page) => {
    const { data } = await api.get(`/3/movie/now_playing?${page}`);
    movies = data.results;
    console.log(movies);
  };

  onMount(() => {
    getMovie();
  });
</script>

<style>

</style>

<MovieContent {movies} />
