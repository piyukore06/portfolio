<script>
    import blog from '../Data/blog.js'
    let latest = blog[0]
</script>
<style>
.avatar {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-image: url(./avatar.jpg);
    background-size: contain;
    background-position: -15px -15px;
    background-repeat: no-repeat;
    margin: 0 auto;
}
.credit {
    font-size: 12px;
}
</style>
<div class="avatar"></div>
<p>
Hi! My name is Priyanka. I am a front-end Developer, preoccupied with finding simplest solutions.
I'm passionate about bringing people together to build great things and using <a class="normal-link" target="_blank" href="https://www.swyx.io/writing/learn-in-public">Learn in Public</a> to share knowledge. 
Presently diving deep into how web works, fancying all things Performance.
<br />
<br />
Currently working on
<a class="normal-link" target="_blank" href="https://photoeditorsdk.com"> Photo Editor SDK</a> at <a target="_blank" class="normal-link" href="https://img.ly"> img.ly</a>
<br>
<br>
Latest Post:  <a class="normal-link" target="_blank" href={latest.path}> {latest.heading}</a>
<br>
<br>
<a class="credit normal-link" target="_blank" href="https://icons8.com">illustration by Ouch.pics</a>
</p>