<script>
  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { tweened } from "svelte/motion";
  import Filters from "./Filters.svelte";
  import Cart from "./Cart.svelte";
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json";
  import { filterToppings, filteredPizzas, cart } from "../store.js";

  function containAll(set, subset) {
    return Array.from(subset).every(elem => set.has(elem));
  }

  function updatePizzas(toppings) {
    $filteredPizzas = pizzas.filter(pizza => {
      if ($filterToppings.size === 0) return true;
      return containAll(new Set(pizza.toppings), $filterToppings);
    });
  }

  $: updatePizzas($filterToppings);
</script>

<Filters />

<section class="columns">
  {#if $cart.length > 0}
    <div class="column is-one-third">
      <Cart />
    </div>
  {/if}

  <div class="column is-two-third">
    <ul class="columns is-multiline is-desktop">
      {#each $filteredPizzas as pizza (pizza.number)}
        <li
          class="column is-half"
          transition:fade
          animate:flip={{ duration: 400 }}>
          <Pizza {...pizza} />
        </li>
      {/each}
    </ul>
  </div>
</section>
