<script>
	import Heading from './Layout/Heading.svelte' 
	import Top from './Layout/Top.svelte' 
	import Bottom from './Layout/Bottom.svelte' 
	import Social from './Social/Index.svelte' 
  
  import Link from './Link.svelte';
  import Route from './Route.svelte';

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
  margin-bottom: 20px;
}
</style>
<Social></Social>
<Top></Top>
<Heading></Heading>
<div class="padding"></div>
<nav>
  <Link page={{path: '/', name: 'About'}} />
  <Link page={{path: '/work', name: 'Work'}} />
  <Link page={{path: '/writing', name: 'Writing'}} />
  <Link page={{path: '/speaking', name: 'Speaking'}} />
</nav>
<div class="container">
  <Route />
</div>

<Bottom></Bottom>
