<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recipe/${params.id}.json`)
      .then((r) => r.json())
      .then((recipe) => ({ recipe }));
  }
</script>

<script>
  export let recipe = null;
  export let error = "";
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<a href="/recipes/all">{'< back'}</a>
<h1>{recipe.title}</h1>

<ul>
  {#each recipe.ingredients as ingredient}
    <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
  {/each}
  {#if error}{error}{/if}
</ul>
