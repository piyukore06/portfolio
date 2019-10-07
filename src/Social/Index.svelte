<script>
	import Github from './Github.svelte' 
	import Insta from './Insta.svelte' 
	import Twitter from './Twitter.svelte' 
</script>
<style>
    .social {
        position: fixed;
        right: 55px;
        bottom: 35px;
        z-index: 1000;
        background-color: var(--bg) !important;
        padding: 0 10px;
    }
</style>

<div class="social">
    <a href="https://github.com/piyukore06" target="_blank" rel="noopener noreferrer"><Github /></a>
    <a href="https://twitter.com/piyukore06" target="_blank" rel="noopener noreferrer"><Twitter /></a>
    <a href="https://www.instagram.com/piyukore06/" target="_blank" rel="noopener noreferrer"><Insta /></a>
</div>