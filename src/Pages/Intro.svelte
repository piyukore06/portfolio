<script>
    import blog from '../Data/blog.js'
    import talks from '../Data/talks.js'
    const upcoming = talks.map((t) => ({...t, date: t.links[0].name})).filter((d) => (new Date() < new Date(d.date)))
    let latest = blog[0]

    import Paintings from '../Components/Painting.svelte'
</script>
<style>

.new {
   font-size: 0.8em; 
}
.name {
    font-size: 1.2em;
    font-weight: 400; 
}
</style>
<div class="avatar"></div>
<br />
<br />
<div class="name">Hi! I am Priyanka 👋🏻</div>
<p>
I am a front-end Developer, preoccupied with finding simplest solutions.
Presently diving deep into how web works, fancying all things Web Accessibility and Performance.
<br />
<br />
Currently working on
<a class="normal-link" target="_blank" href="https://photoeditorsdk.com"> Photo Editor SDK</a> at <a target="_blank" class="normal-link" href="https://img.ly"> img.ly</a>
<br>
<br>
Latest Post:  <a class="normal-link new" target="_blank" href={latest.path}> {latest.heading}</a>
<br>
<br>
{#if upcoming}
Upcoming Talks:  
{#each upcoming as { path, heading }, i}
<a class="normal-link new" target="_blank" href={path}> {heading}</a>
{i === upcoming.length - 1 ? '' : ', '}
{/each}
<br>
<br>
{/if}
When I'm not coding, you can find me splattering colors on a canvas 🖌 or travelling around Europe ⛰
<br>
<br>

<Paintings />

</p>