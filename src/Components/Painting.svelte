<script>
    const imgs = Array.from(Array(6)).map((_, i) => ('./' + (i) + '.jpg'))
</script>
<style>

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(201px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.image {
  border-radius: 4px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  height: 245px;
  border: 15px solid transparent;
  
}
.img {
  border-radius: 4px;
  width: inherit;
  height: inherit;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
<br>
Sometimes, I try and splatter colors on a canvas...
<br>
<br>
<div class="grid-container">
{#each imgs as img, i}
    <div class="image">
        <div class="img" style={`background-image: url(` + img + `)`}></div>
    </div>
{/each}
</div>
<br>