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
</style>

<div class="bottom"></div>
<div class="bottom-background"></div>
<div class="bottom-background-after"></div>