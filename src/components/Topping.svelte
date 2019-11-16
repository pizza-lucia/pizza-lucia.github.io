<script>
  import { filterToppings } from "../store.js";
  import toppings from "../toppings.json";

  export let topping;
  export let medium = false;
  
  function is_class(color, topping) {
    const found = toppings.find(el => el.name === topping);
    return found ? found.color === color : false
  }

</script>

<style>
  .tag {
    margin: 4px;
    cursor: pointer;
  }
</style>

<span
  class="tag is-light"
  class:is-medium={medium}
  class:is-info={is_class("blue", topping)}
  class:is-success={is_class("green", topping)}
  class:is-warning={is_class("yellow", topping)}
  class:is-danger={is_class("red", topping)}
  on:click={() => filterToppings.set($filterToppings.add(topping))}>
  {topping}
</span>
