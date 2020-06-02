<script>
    const imgs = Array.from(Array(8)).map((_, i) => ('./' + (i) + '.jpg'))
</script>
<style>

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.column {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  max-width: 30%;
  padding: 0 4px;
}

.column img {
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin-top: 8px;
  vertical-align: middle;
  width: 85%;
  border: 15px solid transparent;
}
.show-mobile {
  display: none;
}
.hide-mobile {
  display: flex;
}
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 46%;
    flex: 46%;
    max-width: 46%;
  }
  .show-mobile {
    display: flex;
  }
  .hide-mobile {
    display: none;
  }
  .column img {
    border-width: 10px;
  }
}

</style>
<br>
<br>
<div class="row hide-mobile">
  <div class="column">
    <img src="7.jpg" alt="">
    <img src="0.jpg" alt="">
    <img src="2.jpg" alt="">
  </div>
  <div class="column">
    <img src="3.jpg" alt="">
    <img src="1.jpg" alt="">
    <img src="5.jpg" alt="">
  </div>
  <div class="column">
    <img src="8.jpg" alt="">
    <img src="4.jpg" alt="">
  </div>
</div>
<div class="row show-mobile">
  <div class="column">
    <img src="7.jpg" alt="">
    <img src="0.jpg" alt="">
    <img src="1.jpg" alt="">
    <img src="3.jpg" alt="">
  </div>
   <div class="column">
   <img src="8.jpg" alt="">
    <img src="4.jpg" alt="">
    <img src="2.jpg" alt="">
    <img src="5.jpg" alt="">
  </div>
</div>
<br>