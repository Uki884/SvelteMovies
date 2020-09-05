<script>
  import TabItem from "@/components/Atoms/TabItem.svelte";
  export let currentTab;
  const tabs = [
    { label: "上映中の映画", path: "" },
    { label: "人気の映画", path: "" },
    { label: "評価が高い映画", path: "" },
  ];
  const changeTab = (index) => {
    currentTab = index;
  };
</script>

<style lang="scss">
  .tab {
    cursor: pointer;
    display: flex;
    position: fixed;
    top: 80px;
    width: 100%;
    justify-content: center;
    background-color: white;
  }
</style>

<div class="tab">
  {#each tabs as tab, index}
    <TabItem label={tab.label} {index} {currentTab} {changeTab} />
  {/each}
</div>
