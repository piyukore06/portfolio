<script>
  import Heading from "./Layout/Heading.svelte";
  import Top from "./Layout/Top.svelte";
  import Bottom from "./Layout/Bottom.svelte";
  import Social from "./Social/Index.svelte";

  import Link from "./Link.svelte";
  import Route from "./Route.svelte";
</script>

<style>
  .padding {
    padding-top: 80px;
  }
  nav {
    margin: 0 auto;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  .container {
    position: relative;
    font-family: Quicksand;
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
    padding: 2.625rem 1.3125rem;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .copyright {
    font-size: 12px;
    position: fixed;
    bottom: calc(var(--frameHeight) - 20px);
    left: 30px;
    z-index: 1000;
  }

  .love {
    font-size: 12px;
    position: fixed;
    bottom: calc(var(--frameHeight) - 45px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
</style>

<Social />
<Top />
<Heading />
<div class="padding" />
<nav>
  <Link page={{ path: '/', name: 'About' }} />
  <Link page={{ path: '/work', name: 'Work' }} />
  <Link page={{ path: '/blog', name: 'Blog' }} />
  <Link page={{ path: '/talks', name: 'Talks' }} />
</nav>
<div class="container">
  <Route />
</div>
<div class="copyright">© 2021 Priyanka Kore</div>
<div class="love">Made with ♥️</div>
<Bottom />
