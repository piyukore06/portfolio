<script>
export let item
</script>

<style>
    section {
        padding: 15px;
        transition: 0.5s ease all;
    }
    section:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
    h3 {
        font-weight: 100;
        color: #C6426E;
    }
    .secondary {
        color: rgba(34, 34, 34, 0.5);
        font-size: 13px;
        display: inline-flex;
    }
    .secondary > a {
        color: rgba(34, 34, 34, 0.5);
        margin-right: 10px;
    }
    .icon {
        display: inline-block;
        height: 16px;
        width: 16px;
        padding-right: 4px;
    }
    .span {
        margin-right: 10px;
    }
</style>

<a href={item.path} target="_blank" rel="noopener noreferrer">
    <section>
        <div class="heading">
            <h3>{item.heading}</h3>
            {#if item.links}
                {#each item.links as { path, name, prefix }, i}
                    <div class="secondary">
                        <img class="icon" src={prefix} alt="icon" />
                        {#if path !== '#'}
                        <a class="normal-link" target="_blank" href={path}>
                            {name || ''}
                        </a>
                        {:else}
                        <span class="span">{name || ''}</span>
                        {/if}
                    </div>
                {/each}
            {/if}
        </div>
        <p>{item.description || ''}</p>
    </section>
</a>