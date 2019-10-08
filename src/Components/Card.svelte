<script>
export let item
</script>

<style>
    section {
        border-bottom: 1px solid rgba(34, 34, 34, 0.1);
    }
    .heading {
        font-weight: 100;
        padding-left: 10px;
        border-width: 0 0 0 1px;
        border-style: solid;
        border-image: 
            linear-gradient(
            to bottom, 
            #C6426E, 
            #642B73
            ) 1 100%;
        border-color: #642B73;  /* fallback for old browsers */
    }
    a:last-child {
        border-width: 0;
    }
</style>

<a href={item.path} target="_blank" rel="noopener noreferrer">
    <section>
        <h3 class="heading">{item.heading}</h3>
        <p>{item.description}</p>
    </section>
</a>