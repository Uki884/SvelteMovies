<script>
  import Item from "@/components/Atoms/Pagination/Item.svelte";
  export let pages;
  export let currentPage;
  export let totalPage;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const prevPage = (event) => {
    dispatch("pageChange", {
      page: currentPage - 1,
    });
  };

  const nextPage = (event) => {
    dispatch("pageChange", {
      page: currentPage + 1,
    });
  };
</script>

<style lang="scss">
  .pagination {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    padding: 8px;
    background-color: white;
  }
  .button {
    width: 100%;
    height: 36px;
    margin-right: 12px;
    width: 40px;
    cursor: pointer;
  }
</style>

<div class="pagination">
  {#if currentPage > 1}
    <button class="button" on:click={prevPage}>&lt;</button>
  {/if}
  {#each pages as page, index}
    <Item {page} {currentPage} on:pageChange />
  {/each}
  {#if currentPage !== totalPage}
    <button class="button" on:click={nextPage}>&gt;</button>
  {/if}
</div>
