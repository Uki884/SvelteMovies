<script>
  export let label;
  export let event;
</script>

<style>
  .button {
    background-color: white;
  }
</style>

<main>
  <div class="button" on:click={event}>{label}</div>
</main>
