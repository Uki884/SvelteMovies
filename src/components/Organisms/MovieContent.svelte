<script>
  import BaseCard from "@/components/Atoms/BaseCard.svelte";
  export let movies = [];
</script>

<style lang="scss">
  .movie-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 100px 0 60px 0;
  }
</style>

<div>
  <div class="movie-content">
    {#each movies as movie, index}
      <BaseCard title={movie.title} imageUrl={movie.poster_path} />
    {/each}
  </div>
</div>
