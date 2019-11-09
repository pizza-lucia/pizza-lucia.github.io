<script>
  import Topping from "./Topping.svelte";

  export let toppings;
</script>

<div class="is-hidden-tablet">
  {#each toppings as topping}
    <Topping {topping} />
  {/each}
</div>
<div class="content is-hidden-mobile">
  {#each toppings as topping}
    <Topping medium={true} {topping} />
  {/each}
</div>
