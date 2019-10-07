<script>
import { fade } from 'svelte/transition'

</script>
 <style>
 .heading {
    font-family: 'MyFont';
    font-size: 30px;
    font-weight: 120;
    z-index: 1000;
    color: var(--textNormal);
    background: #642B73;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 10px;
    margin: 0;
 }
 .overlay {
   z-index: 999;
   background-color: var(--bg);
   top: var(--frameHeight);
   position: fixed;
   left: 50%;
   width: 255px;
   transform: translate(-50%, -50%);
 }
</style>

<div class="overlay">
<h1 class="heading" in:fade>Priyanka Kore</h1>
</div>