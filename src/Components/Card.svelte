<script>
export let item
</script>

<style>
    section {
        border-bottom: 1px solid rgba(34, 34, 34, 0.2);
    }
</style>

<a href={item.path} target="_blank" rel="noopener noreferrer">
    <section>
        <h3>{item.heading}</h3>
        <p>{item.description}</p>
    </section>
</a>