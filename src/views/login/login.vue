<template>
    <div class="login-wrapper">
        <!-- 头部 -->
        <top-bar />
        <!-- 内容部分 -->
        <div class="content">
            <div class="bg-box">
                <div class="banner-box">
                    <div class="mainform">
                        <h2>账户登录</h2>
                        <tips :isShow='isShow' tipInfo='请点击按钮进行验证' @closeClick='closeClick' />
                        <Input class="phone-input" v-model="formInput.account" placeholder="账户" />
                        <Input class="phone-input" type="password" v-model="formInput.password" placeholder="密码" />
                        <div class="login-btn">
                            <Button type="primary" long @click="loginHandle">登录</Button>
                        </div>
                        <!-- <a href="" class="btn">登录</a> -->
                        <div class="transfer-field">
                            <span class="register" @click="toRegist">注册</span>
                            <span class="forgetPwd">忘记密码？</span>
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

    import topBar from '../../components/top-bar/top-bar'
    import tips from '@/components/tips/tips'
    import footerBase from '@/components/footer-base/footer-base'

    import { login } from '@/api/user'
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
                    password: ""
                },
                isShow: false
            }
        },
        methods: {
            loginHandle() {
                const reg = /^1[3-9][0-9]{9}$/
                if (!this.formInput.account) {
                    this.isShow = true
                } else if (!reg.test(this.formInput.account)) {
                    this.isShow = true
                }
                login(this.formInput).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        this.$Message.info('登录成功')
                        localStorage.setItem('token', res.data)
                        this.$router.push({ name: "home" })
                    } else {
                        this.$Message.error(res.message)
                    }
                })
            },
            closeClick() {
                this.isShow = false
            },
            toRegist() {
                this.$router.push({ name: 'regist' })
            }
        }
    }
</script>

<style lang="less" scoped>
    // 内容部分
    .content {
        width: 100%;
        height: 750px;
        background: linear-gradient(180deg, #edfcfd 0%, #faffff 100%);
        .bg-box {
            width: 100%;
            height: 100%;
            background: url("~@/assets/image/login/pic-flyme.png") no-repeat center;
        }
    }
    .content .banner-box {
        width: 1240px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .mainform {
            width: 368px;
            height: 318px;
            background-color: #fff;
            position: absolute;
            right: 100px;
            top: 200px;
            padding: 35px 35px 10px;
            box-sizing: border-box;
            box-shadow: 0px 6px 12px 0 #dadada;
            h2 {
                width: 300px;
                height: 29px;
                color: #515151;
                margin: 30px 0 10px;
                text-align: center;
                font: bolder 20px "Microsoft Yahei", Arial, Helvetica, sans-serif;
            }
            .phone-input {
                margin: 10px 0 20px;
            }
            .login-btn {
                padding-top: 12px;
                &:hover {
                    cursor: pointer;
                }
            }
            .transfer-field {
                width: 298px;
                height: 20px;
                margin-top: 15px;
                .forgetPwd {
                    text-decoration: none;
                    color: #387aff;
                    font: 14px "Microsoft Yahei", Arial, Helvetica, sans-serif;
                    text-align: left;
                }
            }
            .register {
                text-decoration: none;
                color: #387aff;
                font-size: 14px;
                margin-right: 194px;
                cursor: pointer;
            }
        }
    }
    //底部区域
</style>