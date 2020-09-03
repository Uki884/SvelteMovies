<script>
  import { createEventDispatcher } from "svelte";

  export let page;
  export let currentPage;
  const dispatch = createEventDispatcher();

  const changePage = (page) => {
    dispatch("pageChange", {
      page,
    });
  };
</script>

<style lang="scss">
  .button {
    width: 100%;
    height: 36px;
    margin-right: 12px;
    width: 40px;
    cursor: pointer;
  }
  .selected {
    background-color: gray;
  }
</style>

<button
  class:selected={page === currentPage}
  class="button"
  on:click={changePage(page)}>{page}
</button>
