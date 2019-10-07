<script>
  import { curRoute } from './store'

  export let page
  export let className = page.active ? 'nav active' : 'nav'
  function redirectTo(event){
    // change current router path
    curRoute.set(event.target.pathname)
    // push the path into web browser history API
    window.history.pushState({ path: page.path }, '', window.location.origin + page.path)
  }
</script>

<style>

.nav {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 2px 7px;
  text-decoration: none;
  color: var(--textNormal);
}
.nav,
.nav:hover,
.nav:focus,
.nav:active {
  text-decoration: none;
}

.nav::after {
  content: "";
  position: absolute;
}

.nav::after {
  top: 95%;
  height: 2px !important;
  width: 0%;
  left: 30%;
  background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: 0.4s ease-out all .1s;
}
.nav:active::after,
.nav:hover::after {
  width: 90%;
  left: 5%;
  transition: 0.5s ease all;
}
.active::after {
  width: 90%;
  left: 5%;
  transition: 0.5s ease all;
}
.nav:visited {
	outline-width: 0;
	text-decoration: none;
	color: var(--textNormal);
}
</style>

<a class={className} href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>
