<script>
  import api from "@/api/axios.js";
  import NowPlaying from "@/components/Pages/NowPlaying.svelte";
  import Popular from "@/components/Pages/Popular.svelte";
  import TopRate from "@/components/Pages/TopRate.svelte";
  import TheHeader from "@/components/Organisms/TheHeader.svelte";
  import Tab from "@/components/Molecules/Tab.svelte";
  import Pagination from "@/components/Organisms/Pagination.svelte";
  let currentTab = 0;
  let movies;
  let pagination;
  let page = 1;
  let component;
  let methods;
  $: pages = computePages(pagination);

  const getNowPlayingMovie = async (page) => {
    const { data } = await api.get(`/3/movie/now_playing?page=${page}`);
    pagination = {
      count: data.total_results,
      totalPage: data.total_pages,
    };
    movies = data.results;
  };

  const getPopularMovie = async (page) => {
    const { data } = await api.get(`/3/movie/popular?page=${page}`);
    pagination = {
      count: data.total_results,
      totalPage: data.total_pages,
    };
    movies = data.results;
  };

  const getTopRateMovie = async (page) => {
    const { data } = await api.get(`/3/movie/top_rated?page=${page}`);
    pagination = {
      count: data.total_results,
      totalPage: data.total_pages,
    };
    movies = data.results;
  };

  $: changecurrent(currentTab);

  const changecurrent = (val) => {
    page = 1;
    if (val === 0) {
      component = NowPlaying;
      getNowPlayingMovie(page);
    } else if (val === 1) {
      component = Popular;
      getPopularMovie(page);
    } else if (val === 2) {
      component = TopRate;
      getTopRateMovie(page);
    }
    console.log(pagination);
  };

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
    if (currentTab == 0) {
      getNowPlayingMovie(page);
    } else if (currentTab === 1) {
      getPopularMovie(page);
    } else if (currentTab === 2) {
      getTopRateMovie(page);
    }
  };
</script>

<TheHeader />
<Tab bind:currentTab />
<svelte:component this={component} {...methods} {movies} />
<Pagination
  {pages}
  currentPage={page}
  on:pageChange={changePage}
  {...pagination} />
