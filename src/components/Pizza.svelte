<script>
  import { formatPrice } from "../utils.js";
  import Toppings from "./Toppings.svelte";
  import Allergens from "./Allergens.svelte";
  import { cart } from "../store.js";

  export let name = "";
  export let position = 0;
  export let price = 0.0;
  export let weight = 0;
  export let toppings = [];
  export let allergens = [];
  let currency = "EUR";

  function addToCard() {
    cart.update(pizzas => [
      ...pizzas,
      { name, position, price, weight, toppings, allergens }
    ]);
  }
</script>

<style>
  @media only screen and (max-width: 768px) {
    .card-content {
      padding: 1rem;
    }
    .card-footer {
      border-top: 0;
      padding-bottom: 0.5rem;
    }
  }
</style>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      <span class="tag is-success" style="margin-right: 0.5rem">{position}</span>
      <span class="is-size-5">{name}</span>
    </p>

    <div class="card-header-icon">
      <span class="is-hidden-mobile">
        <small style="margin-right: 1rem">{weight}g</small>
        <span class="tag is-medium is-warning">
          <strong>{formatPrice(price, currency)}</strong>
        </span>
        &nbsp;
      </span>
      <button class="button is-small" on:click={() => addToCard()}>
        <span class="icon">
          <i class="fas fa-lg fa-plus" />
        </span>
      </button>
    </div>
  </header>
  <div class="card-content">
    <Toppings {toppings} />
  </div>
  <footer class="card-footer is-hidden-mobile"
    style="justify-content: flex-end; border-top:0; margin-top: -1.5rem;">
      <Allergens {allergens} />
  </footer>
  <footer
    class="card-footer is-hidden-tablet"
    style="justify-content: space-around; align-items: baseline;">

    <div>
      <span class="tag is-medium">{weight}g</span>
    </div>
    <Allergens {allergens} />
    <div>
      <span class="tag is-medium is-warning">
        {formatPrice(price, currency)}
      </span>
    </div>

  </footer>
</div>
