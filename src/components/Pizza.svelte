<script>
  import Toppings from "./Toppings.svelte";
  export let name = "";
  export let weight = 0;
  export let featured = false;
  export let price = 0.0;
  export let currency = "EUR";
  export let toppings = [];
  export let number = 0;

  $: amount = price.toLocaleString("sk", {
    style: "currency",
    currency: currency
  });
</script>

<li class="column is-half">
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
        <small style="margin-right: 1rem">{weight}g</small>
        <span class="tag is-medium is-warning">{amount}</span>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
          <Toppings toppings={toppings} />
      </div>
    </div>
  </div>
</li>
