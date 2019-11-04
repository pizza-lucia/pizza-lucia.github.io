<script>
  import Pizza from "./Pizza.svelte";
  import pizzas from "../pizzas.json";
</script>

<ul class="columns is-multiline is-desktop">
  {#each pizzas as pizza}
    <Pizza {...pizza} />
  {/each}
</ul>
