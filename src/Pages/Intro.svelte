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
    padding-bottom: 10px;
}

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300%) rotate(-180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translateX(-300%) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
  backface-visibility: hidden;
  perspective: 1000;
}

.avatar {
  margin: 0 auto;
  position: relative;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  width: 210px;
  height: 210px;
  display: block;
  background: #642b73; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgba(198, 66, 110, 0.7),
    rgba(100, 43, 115, 0.7)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgba(198, 66, 110, 0.7),
    rgba(100, 43, 115, 0.7)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50%;
}

.avatar-background {
  position: absolute;
  height: 200px;
  width: 200px;
  left: 5px;
  top: 5px;
  border-radius: 50%;
  background-image: url(./image.jpg);
  background-size: cover;
  background-position: 0px -100px;
  background-repeat: no-repeat;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}


</style>
<div class="avatar rollIn">
    <div class="avatar-background"></div>
</div>
<br />
<br />
<div class="name">Hi! I am Priyanka 👋🏻</div>

I am a front-end Developer, preoccupied with finding simplest solutions.
<br />
<strong>🚀 Passionate About Performance</strong>
As a frontend developer, I'm on a mission to make the web faster and more efficient. I believe that exceptional user experiences start with blazing-fast web applications. My work is dedicated to optimizing performance, enhancing loading times, and ensuring seamless interactions for users.
<br />
<br />
<strong>💡 Advocate for Knowledge Sharing</strong>
I'm not just a developer; I'm a firm believer in the power of sharing knowledge. Whether I'm giving talks at industry events or writing blog posts on the latest web technologies, I'm committed to helping others learn and grow in the field. Together, we can make the web a better place.
<br />
<br />
<strong>🚀 Let's Elevate the Web Together</strong>
Join me in the quest for a faster, more accessible web. Whether you're a fellow developer or a curious learner, let's connect, collaborate, and explore the exciting world of frontend development and performance optimization.
<br />
<br />
<strong>📬 Contact Me</strong>
Feel free to reach out to me at my social media handles. I'm always eager to engage in meaningful discussions, share ideas, and contribute to the vibrant developer community.
<br />
<br />
Currently working at <a target="_blank" class="normal-link" href="https://www.adesso.de/"> Adesso</a>.
<br>
<br>
{#if upcoming.length}
    Upcoming Talks:  
    {#each upcoming as { path, heading }, i}
    <a class="normal-link new" target="_blank" href={path}> {heading}</a>
    {i === upcoming.length - 1 ? '' : ', '}
    {/each}
{:else}
    Latest Blogpost:  <a class="normal-link new" target="_blank" href={latest.path}> {latest.heading}</a>
{/if}
<br>
<br>
When I'm not coding, you can find me striking a yoga pose 🧘🏻‍♀️ or splattering colors on a canvas 🖌 
<br>
<br>

<div class="separator"></div>

<Paintings />
