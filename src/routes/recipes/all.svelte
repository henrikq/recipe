<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recipes/all.json`)
      .then((r) => r.json())
      .then((recipes) => ({ recipes }));
  }
</script>

<script>
  export let recipes = [];
  export let error = "";
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<h1>all Recipes</h1>

<ul>
  {#each recipes as recipe}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{recipe.slug}">{recipe.title}</a>
    </li>
  {/each}
  {#if error}{error}{/if}
</ul>
