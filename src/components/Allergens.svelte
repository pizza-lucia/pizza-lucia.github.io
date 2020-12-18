<script>
  import data from '../allergens.json';
  export let allergens = [];
</script>

<style>
  .allergen {
    cursor: help;
    margin: 4px 3px !important;
  }
</style>

<div>
  {#each allergens as n}
    <span class="tag is-rounded allergen" title={`Alergén: ${data[n.toString()]}`}>{n}</span>
  {/each}
</div>
