<style>
	.top {
        left: 30px;
        right: 30px;
        top: var(--frameHeight);
        height: 1px;
        background: var(--textNormal);
        position: fixed;
        z-index: 999;
    }
    .top-background {
        left: 0;
        right: 0;
        top: 0;
        height: var(--frameHeight);
        background: var(--bg);
        position: fixed;
        z-index: 999;
    }
    .top-background-after {
        left: 0;
        right: 0;
        top: calc(var(--frameHeight) + 1px);
        height: calc(var(--frameHeight) - 15px);
        background: var(--bg);
        position: fixed;
        z-index: 999;
    }
</style>

<div class="top"></div>
<div class="top-background"></div>
<div class="top-background-after"></div>