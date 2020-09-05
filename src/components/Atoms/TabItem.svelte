<script>
  export let label;
  export let index;
  export let currentTab;
  export let changeTab;
</script>

<style lang="scss">
  .tab-item {
    height: 32px;
    border-bottom: 2px solid #ddd;
    padding: 0px 16px;
    margin-bottom: 12px;
    transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  .selected {
    border-bottom: 2px solid black;
  }
</style>

<div
  class="tab-item"
  class:selected={index === currentTab}
  on:click={changeTab(index)}>
  {label}
</div>
