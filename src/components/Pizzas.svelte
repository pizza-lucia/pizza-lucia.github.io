<script>
  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { tweened } from "svelte/motion";
  import Pizza from "./Pizza.svelte";
  import { filterToppings, filteredPizzas } from "../store.js";

  export let pizzas;

  const containAll = (set, subset) => Array.from(subset).every(elem => set.has(elem));

  $: filteredPizzas.set(
    $filterToppings.size === 0
      ? pizzas
      : pizzas.filter(pizza =>
          containAll(new Set(pizza.toppings), $filterToppings)
        )
  );
</script>

<section class="columns">

  <slot /> <!-- Reserved for Cart component -->

  <div class="column">
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
