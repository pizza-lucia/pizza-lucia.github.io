<script>
  import { formatPrice } from "../utils.js";
  import { cart } from "../store.js";

  const remove = pizza => {
    const index = $cart.indexOf(pizza);
    cart.update(pizzas => pizzas.filter((p, i) => i !== index));
  };

  $: groupped = $cart
    .reduce((counts, pizza) => {
      var counter = counts.find(el => el.pizza.name === pizza.name);
      if (counter) {
        counter.count += 1;
      } else {
        counts.push({ count: 1, pizza });
      }
      return counts;
    }, Array())
    .sort((a, b) => a.pizza.position > b.pizza.position);

  $: total = formatPrice(
    $cart.reduce((amount, pizza) => amount + pizza.price, 0)
  );
</script>

<style>
  aside {
    margin-bottom: 1rem;
  }
</style>

{#if $cart.length > 0}
  <aside class="panel is-success">
    <div class="panel-heading is-marginless level is-mobile">
      <div class="level-left">
        <span class="icon is-large">
          <i class="fas fa-2x fa-shopping-basket" />
        </span>
      </div>
      <div class="level-right">
        <strong class="tag is-large is-success is-light">{total}</strong>
      </div>
    </div>

    {#each groupped as line}
      <div class="panel-block">

        <p class="card-header-title has-text-grey">
          <span class="tag is-white is-large">{line.count}</span>
          <span class="is-size-5">{line.pizza.name}</span>
        </p>

        <div class="card-header-icon">
          <span class="tag is-medium">
            <strong>
              {formatPrice(line.count * line.pizza.price, line.pizza.currency)}
            </strong>
          </span>
          &nbsp;
          <button
            class="button is-small is-outlined"
            on:click={() => remove(line.pizza)}>
            <span class="icon has-text-danger">
              <i class="fas fa-lg fa-trash-alt" />
            </span>
          </button>
        </div>

      </div>
    {/each}
  </aside>
{/if}
