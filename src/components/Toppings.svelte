<script>
  export let toppings;
</script>

<style>
  .tag {
    margin: 0 4px;
  }
</style>

{#each toppings as topping}
  <span class="tag is-medium">{topping}</span>
{/each}
