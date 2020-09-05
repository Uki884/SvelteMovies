<script>
  import api from "@/api/axios.js";
  import MovieContent from "@/components/Organisms/MovieContent.svelte";
  import Pagination from "@/components/Organisms/Pagination.svelte";
  import { onMount } from "svelte";
  let movies;
  let pagination;
  let page = 1;
  $: pages = computePages(pagination);

  const computePages = () => {
    if (pagination) {
      let start = Math.max(page - 2, 1);
      const end = Math.min(start + 5, pagination.totalPage);
      start = Math.max(end - 5, 1);
      return [...new Array(end - start + 1)].map((v, i) => i + start);
    }
    return [];
  };

  const changePage = (event) => {
    page = event.detail.page;
    getMovie(page);
  };

  const getMovie = async (page) => {
    const { data } = await api.get(`/3/movie/now_playing?page=${page}`);
    pagination = {
      count: data.total_results,
      totalPage: data.total_pages,
    };
    movies = data.results;
    console.log(movies, pagination);
    console.log(pages);
  };

  onMount(() => {
    getMovie();
  });
</script>

<style>

</style>

<MovieContent {movies} {getMovie} {page} />
<Pagination
  {pages}
  currentPage={page}
  {...pagination}
  on:pageChange={changePage} />
