<script>
    import blog from '../Data/blog.js'
    import talks from '../Data/talks.js'
    const upcoming = talks.map((t) => ({...t, date: t.links[0].name})).filter((d) => (new Date() < new Date(d.date)))
    let latest = blog[0]

    import Paintings from '../Components/Painting.svelte'
</script>
<style>
.avatar {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-image: url(./avatar.jpg);
    background-size: cover;
    background-position: -15px -15px;
    background-repeat: no-repeat;
    margin: 0 auto;
}
.credit {
    font-size: 12px;
}
.new {
   font-size: 0.8em; 
}
</style>
<div class="avatar"></div>
<p>
Hi! My name is Priyanka. I am a front-end Developer, preoccupied with finding simplest solutions.
I'm passionate about bringing people together to build products with good user experience and using <a class="normal-link" target="_blank" href="https://www.swyx.io/writing/learn-in-public">Learn in Public</a> to share knowledge. 
Presently diving deep into how web works, fancying all things Web Performance.
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
<a class="normal-link new" target="_blank" href={path}> {'  '} {heading}</a>
{i === upcoming.length - 1 ? '' : ','}
{/each}
<br>
<br>
{/if}
<Paintings />

<a class="credit normal-link" target="_blank" href="https://icons8.com">illustration by Ouch.pics</a>
</p>