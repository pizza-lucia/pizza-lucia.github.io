<script>
  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { tweened } from "svelte/motion";
  import Filters from "./Filters.svelte";
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json";
  import { filterToppings, filteredPizzas } from "../store.js";
  
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

<ul class="columns is-multiline is-desktop">
  {#each $filteredPizzas as pizza (pizza.number)}
    <li class="column is-half" transition:fade animate:flip={{ duration: 600 }}>
      <Pizza {...pizza} />
    </li>
  {/each}
</ul>
