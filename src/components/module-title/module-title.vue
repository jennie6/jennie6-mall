<template>
    <h2>{{title}}</h2>
</template>

<script>
    export default {
        props: {
            title: String
        }

    }
</script>

<style lang="less" scoped>
    h2 {
        // height: 45px;
        line-height: 2;
        color: #000;
        text-align: center;
        padding-top: 50px;
        margin-bottom: 10px;
        font-size: 30px;
    }
</style>