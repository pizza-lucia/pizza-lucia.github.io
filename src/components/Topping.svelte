<script>
  import { filterToppings } from "../store.js";

  export let topping;
  export let medium = false;

  $filterToppings;
</script>

<style>
  .tag {
    margin: 4px;
    cursor: pointer;
  }
</style>

<span
  class="tag"
  class:is-medium={medium}
  on:click={() => filterToppings.set($filterToppings.add(topping))}>
  {topping}
</span>
