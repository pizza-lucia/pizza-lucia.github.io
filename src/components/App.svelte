<script>
  import toml from "@iarna/toml";
  import pizzas from "../pizzas.json";
  import allergens from "../allergens.json";

  import Cart from "./Cart.svelte";
  import Filters from "./Filters.svelte";
  import Pizzas from "./Pizzas.svelte";
</script>

<Cart />

<Filters />

<Pizzas {pizzas} />

<aside class="block" style="padding: 2rem">
  <p>Alergény:</p>

  <p class="content is-small">{Object.entries(allergens).map(([n, allergen]) => `${n}: ${allergen}`).join(" – ")}
  </p>
</aside>
