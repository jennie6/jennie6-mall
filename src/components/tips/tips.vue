<template>
    <div class="tips" v-show="isShow">
        <div class="tip-text">
            <span class="icon"></span>
            {{tipInfo}}</div>
        <div class="close" @click="closeClick"></div>
    </div>
</template>

<script>
    export default {
        props: {
            tipInfo: String,
            isShow: Boolean
        },
        methods: {
            closeClick() {
                this.$emit('closeClick')
            }
        }

    }
</script>

<style lang="less" scoped>
    .tips {
        height: 32px;
        padding: 0 10px;
        box-sizing: border-box;
        margin: 5px 0;
        font-size: 12px;
        border: 1px solid #ffc2b3;
        background-color: #ffd1ca;
        .tip-text {
            float: left;

            color: #666;
            line-height: 32px;
            .icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-right: 10px;
                background: url("https://uc-res.mzres.com/resources/uc/wlogin/member/images/error-ico.png");
                vertical-align: middle;
            }
        }
        .close {
            float: right;
            width: 16px;
            height: 32px;
            line-height: 32px;
            background: url("https://uc-res.mzres.com/resources/uc/wlogin/member/images/close-ico.png")
                no-repeat center;
        }
    }
</style>