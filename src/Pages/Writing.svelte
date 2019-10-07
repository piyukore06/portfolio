<script>
  import blogs from '../Data/blog'
  import Card from '../Components/Card.svelte'
</script>

{#each blogs as blog, i}
<Card item={blog}></Card>
{/each}