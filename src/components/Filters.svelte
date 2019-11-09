<script>
  import { filterToppings } from "../store.js";
  import { slide } from "svelte/transition";

  const rm = topping => {
    $filterToppings.delete(topping);
    filterToppings.set($filterToppings);
  };
</script>

<style>
  .tags {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0 16px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      white 20%,
      white 100%
    );
    min-height: 2rem;
  }
</style>

{#if $filterToppings !== new Set()}
  <div class="tags" transition:slide>
    {#each Array.from($filterToppings) as topping}
      <span class="tag is-medium is-success">
        {topping}
        <button class="delete is-small" on:click={() => rm(topping)} />
      </span>
    {/each}
  </div>
{/if}
