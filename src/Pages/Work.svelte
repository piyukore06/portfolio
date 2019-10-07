<script>
  import projects from '../Data/projects'
  import Card from '../Components/Card.svelte'
</script>

{#each projects as project, i}
<Card item={project}></Card>
{/each}