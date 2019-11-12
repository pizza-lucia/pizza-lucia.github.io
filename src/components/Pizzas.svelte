<script>
  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { tweened } from "svelte/motion";
  import Filters from "./Filters.svelte";
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json";
  import { filterToppings, filteredPizzas } from "../store.js";

  let duration = { duration: 600 };

  function containAll(set, subset) {
    return Array.from(subset).every(elem => set.has(elem));
  }

  $: filterPizzas = pizzas.filter(pizza => {
    if ($filterToppings.size === 0) return true;
    const toppings = new Set(pizza.toppings);
    return containAll(toppings, $filterToppings);
  });
</script>

<Filters />

<ul class="columns is-multiline is-desktop">
  {#each filterPizzas as pizza (pizza.number)}
    <li class="column is-half" transition:fade animate:flip={duration}>
      <Pizza {...pizza} />
    </li>
  {/each}
</ul>
