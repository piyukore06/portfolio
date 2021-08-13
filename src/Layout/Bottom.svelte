<style>
	.bottom {
        left: 30px;
        right: 30px;
        bottom: var(--frameHeight);
        height: 1px;
        background: var(--textNormal);
        position: fixed;
        z-index: 999;
    }
    .bottom-background {
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--frameHeight);
        background: var(--bg);
        position: fixed;
        z-index: 999;
    }
    .bottom-background-after {
        left: 0;
        right: 0;
        bottom: calc(var(--frameHeight) + 1px);
        height: calc(var(--frameHeight) - 20px);
        background: var(--bg);
        position: fixed;
        z-index: 999;
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
    bottom: calc(var(--frameHeight) - 35px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
  @media screen and (max-width: 480px) {
 .love {
    bottom: calc(var(--frameHeight) - 42px);
 }
}
</style>
<div class="copyright">© 2021 Priyanka Kore</div>
<div class="love">Made with ♥️</div>
<div class="bottom"></div>
<div class="bottom-background"></div>
<div class="bottom-background-after"></div>