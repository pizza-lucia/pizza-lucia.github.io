<script>
  import { formatPrice } from "../utils.js";
  import Toppings from "./Toppings.svelte";
  import { cart } from "../store.js";

  export let name = "";
  export let toppings = [];
  export let weight = 0;
  export let price = 0.0;
  export let currency = "EUR";
  export let featured = false;
  export let number = 0;

  function addToCard() {
    cart.update(pizzas => [
      ...pizzas,
      { name, toppings, weight, price, currency, featured, number }
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
      <span class="tag is-success" style="margin-right: 0.5rem">{number}</span>
      <span class="is-size-5">{name}</span>
      {#if featured}
        <span class="tag is-warning" style="margin-left: 1rem">Novinky</span>
      {/if}
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
  <footer
    class="card-footer is-hidden-tablet"
    style="justify-content: space-around">

    <div>
      <span class="tag is-medium">{weight}g</span>
    </div>
    <div>
      <span class="tag is-medium is-warning">
        {formatPrice(price, currency)}
      </span>
    </div>

  </footer>
</div>
