<script>
  import { slide } from "svelte/transition";
  import { filterToppings } from "../store.js";

  const rm = topping => {
    $filterToppings.delete(topping);
    filterToppings.set($filterToppings);
  };
</script>

<style>
  .tag.is-delete {
    cursor: pointer;
  }
  .topping-filter {
    position: sticky;
    top: 10px;
    z-index: 1;
    padding: 0 16px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      white 30%,
      white 100%
    );
  }
</style>

{#if $filterToppings.size !== 0}
  <div
    class="field is-grouped is-grouped-multiline topping-filter"
    transition:slide>

    {#each Array.from($filterToppings) as topping}
      <div class="control">
        <div class="tags has-addons">
          <i class="tag is-medium is-success">{topping}</i>
          <b class="tag is-delete is-medium" on:click={() => rm(topping)} />
        </div>
      </div>
    {/each}

  </div>
{/if}
