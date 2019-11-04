<script>
  import { slide } from "svelte/transition";

  export let toppings;
</script>

<style>
  .tag {
    margin: 4px;
  }
</style>

  <div class="is-mobile-only">
    {#each toppings as topping}
      <span class="tag">{topping}</span>
    {/each}
  </div>
  <div class="content is-hidden-mobile">
    {#each toppings as topping}
      <span class="tag is-medium">{topping}</span>
    {/each}
  </div>
