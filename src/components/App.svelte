<script>
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json"
</script>

<div class="container">
  <ul class="columns is-multiline is-desktop">
    {#each pizzas as pizza, index}
      <Pizza {...pizza} number={index + 1} />
    {/each}
  </ul>
</div>
