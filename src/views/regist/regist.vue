<template>
    <div class="regist-wrapper">
        <!-- 头部 -->
        <top-bar />
        <!-- 内容 -->
        <div class="content">
            <div class="bg-box">
                <div class="banner-box">
                    <div class="mainform">
                        <div class="tab-title">
                            <a href="">注册 Flyme 账号</a>
                        </div>
                        <tips :isShow='isShow' tipInfo='请点击按钮进行验证' @closeClick='closeClick' />
                        <Input class="phone-input" v-model="formInput.account" placeholder="账号" />
                        <Input class="phone-input" type="password" v-model="formInput.password" placeholder="密码" />
                        <div class="agree">
                            <Radio class="icon" v-model="formInput.recordAgree"></Radio>
                            <div class="pointer">
                                <span>注册账号即表示您同意并愿意遵守</span>
                                <a href="">Flyme账号服务协议</a>
                                <span>、</span>
                                <a href="">法律声明</a>
                                <span>和</span>
                                <a href="">隐私政策</a>
                            </div>
                        </div>
                        <span class="btn" @click="registHandle">立即注册</span>
                        <div class="login" @click="toLogin">
                            登录
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部区域 -->
        <footer-base />
    </div>
</template>

<script>

    import topBar from '@/components/top-bar/top-bar'
    import tips from '@/components/tips/tips'
    import footerBase from '@/components/footer-base/footer-base'

    import { regist } from '@/api/user'
    export default {
        components: {
            topBar,
            tips,
            footerBase
        },
        data() {
            return {
                formInput: {
                    account: '',
                    password: ''
                },
                isShow: false
            }
        },
        methods: {
            registHandle() {
                const reg = /^1[3-9][0-9]{9}$/
                if (!this.formInput.account && !this.formInput.password) {
                    this.isShow = true
                    return
                }
                regist(this.formInput).then(res => {
                    this.$Message.success('注册成功')
                    this.$router.push({ name: 'login' })
                })
            },
            closeClick() {
                this.isShow = false
            },
            toLogin() {
                this.$router.push({ name: 'login' })
            }
        }
    }
</script>

<style lang="less" scoped>
    // 内容区域
    .content {
        width: 100%;
        height: 750px;
        background: linear-gradient(180deg, #edfcfd 0%, #faffff 100%);
        .bg-box {
            width: 100%;
            height: 100%;
            background: url("~@/assets/image/login/pic-flyme.png") no-repeat center;
        }
        .banner-box {
            width: 1240px;
            height: 100%;
            margin: 0 auto;
            position: relative;
            .mainform {
                width: 368px;
                height: 516px;
                background-color: #fff;
                position: absolute;
                right: 100px;
                top: 118px;
                padding: 72px 35px 20px;
                box-sizing: border-box;
                box-shadow: 0px 6px 12px 0 #dadada;
                .tab-title {
                    width: 298px;
                    height: 25px;
                    margin: 30px 0;
                    text-align: center;
                    a {
                        text-decoration: none;
                        color: #387aff;
                        font-size: 18px;
                    }
                }

                .phone-input {
                    margin: 10px 0 20px;
                }

                .agree {
                    width: 298px;
                    height: 40px;
                    margin-bottom: 10px;
                    .icon {
                        float: left;
                        margin-right: 5px;
                        margin-top: 2px;
                    }
                    .pointer {
                        a {
                            text-decoration: none;
                            color: #387aff;
                            font-size: 12px;
                        }
                        span {
                            color: #515151;
                            font-size: 12px;
                        }
                    }
                }
                .btn {
                    display: inline-block;
                    width: 300px;
                    height: 46px;
                    background-color: #387aff;
                    text-decoration: none;
                    color: #fff;
                    font: 14px "Microsoft Yahei", Arial, Helvetica, sans-serif;
                    text-align: center;
                    padding-top: 12px;
                    box-sizing: border-box;
                    &:hover {
                        cursor: pointer;
                    }
                }
                .login {
                    margin-top: 24px;
                    color: #387aff;
                    font-size: 14px;
                    cursor: pointer;
                }
            }
        }
    }
    //底部区域
</style>