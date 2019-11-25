<script>
  import { formatPrice } from "../utils.js";
  import { cart } from "../store.js";

  $: groupped = $cart.reduce((counts, pizza) => {
      var counter = counts.find(el => el.pizza.name === pizza.name);
      if (counter) {
        counter.count += 1;
      } else {
        counts.push({ count: 1, pizza });
      }
      return counts
    }, Array()).sort((a, b) => a.pizza.number > b.pizza.number)

  $: total = formatPrice($cart.reduce((amount, pizza) => amount + pizza.price, 0))
</script>

<style>
  .cart {
    margin-bottom: 1rem;
  }
</style>
<section class="panel cart" on:click={() => cart.set($cart.splice(0, 1))}>
  {#each groupped as pizza}
    <div class="panel-block">

      <p class="card-header-title">
        <strong class="is-size-5">{pizza.count}&nbsp;×&nbsp;</strong>
        <span class="is-size-5">{pizza.pizza.name}</span>
      </p>

      <div class="card-header-icon">
        <span class="tag is-medium">
          <strong>{formatPrice(pizza.count * pizza.pizza.price, pizza.pizza.currency)}</strong>
        </span>
      </div>

    </div>
  {/each}
  <div class="panel-block">
    <p class="card-header-title is-size-4">Total</p>
    <div class="card-header-icon"><strong class="tag is-large is-success is-light">{total}</strong></div>
  </div>
</section>
