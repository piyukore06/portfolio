<script>
  import talks from '../Data/talks'
  import Card from '../Components/Card.svelte'
</script>

{#each talks as talk, i}
    <Card item={talk}></Card>
{/each}