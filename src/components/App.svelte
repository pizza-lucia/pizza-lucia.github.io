<script>
  import pizzas from "../pizzas.json";

  import Cart from "./Cart.svelte";
  import Filters from "./Filters.svelte";
  import Pizzas from "./Pizzas.svelte";
</script>

<Cart />

<Filters />

<Pizzas {pizzas} />
