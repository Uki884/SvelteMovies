<script>
  export let title;
  export let imageUrl;
</script>

<style lang="scss">
  // .background {
  //   background-color: rgba(0, 0, 0, 0.2);
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   z-index: 2000;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   transform: translate3d(0, 0, 0);
  // }
  .card {
    height: 500px;
    width: 300px;
    transition: 0.5s;
    overflow: hidden;
    width: 320px;
    padding: 0;
    margin: 24px auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
    margin: 16px;
    &-title {
      font-size: 16px;
      padding: 12px;
      text-align: center;
    }
    &-image {
      height: 400px;
      width: 100%;
    }
    &-content {
      height: 100%;
      width: 100%;
    }
  }
</style>

<div class="card">
  {#if imageUrl}
    <img
      class="card-image"
      src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{imageUrl}" />
  {:else}
    <img
      src="http://design-ec.com/d/e_others_50/l_e_others_500.png "
      class="card-image" />
  {/if}

  <div class="card-title">{title}</div>
  <div class="card-content">
    <slot name="content" />
  </div>
</div>
