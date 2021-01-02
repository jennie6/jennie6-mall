<template>
    <div>
        <div class="cycle-img">
            <img src="https://store.res.meizu.com/member/img/mcycle-banner-c22f1a3aed.jpg" alt="">
            <Button class="cycle-btn" type="primary" ghost>立即以旧换新</Button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>

<style lang="less" scoped>
    .cycle-img {
        position: relative;
        img {
            width: 100%;
        }
        .cycle-btn {
            width: 266px;
            height: 55px;
            position: absolute;
            left: 50%;
            top: 320px;
            transform: translateX(-50%);
        }
    }
</style>