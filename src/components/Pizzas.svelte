<script>
  import Filters from "./Filters.svelte";
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json";
  import { filterToppings } from "../store.js";

  function containAll(set, subset) {
    return Array.from(subset).every(elem => set.has(elem));
  }

  $: filterPizzas = pizzas.filter(pizza => {
    if ($filterToppings.size === 0) return pizzas;
    const toppings = new Set(pizza.toppings);
    return containAll(toppings, $filterToppings);
  });
</script>

<Filters />

<ul class="columns is-multiline is-desktop">
  {#each filterPizzas as pizza}
    <Pizza {...pizza} />
  {/each}
</ul>
