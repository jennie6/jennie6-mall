<template>
    <div class="footer">
        <div class="meizu-footer layout">
            <div class="service-container">
                <div class="info-left">
                    <ul>
                        <li>
                            <img src="~@/assets/image/home/icon1.png" alt="" />
                            <p>满80免运费</p>
                        </li>
                        <li>
                            <img src="~@/assets/image/home/icon2.png" alt="" />
                            <p>100+ 城市次日送达</p>
                        </li>
                        <li>
                            <img src="~@/assets/image/home/icon3.png" alt="" />
                            <p>7天无理由退货</p>
                        </li>
                        <li>
                            <img src="~@/assets/image/home/icon4.png" alt="" />
                            <p>15天换货保障</p>
                        </li>
                        <li>
                            <img src="~@/assets/image/home/icon5.png" alt="" />
                            <p>1年免费保修</p>
                        </li>
                        <li>
                            <img src="~@/assets/image/home/icon6.png" alt="" />
                            <p>上门快修</p>
                        </li>
                    </ul>
                </div>
                <div class="info-right">
                    <span>周一至周日 8:00-20:00</span>
                    <p class="tel">400-788-3333</p>
                    <a href="">在线客服</a>
                </div>

            </div>
            <ul class="footer-nav">
                <li>
                    <a href="">了解魅族</a>
                </li>
                <li>
                    <a href="">加入我们</a>
                </li>
                <li>
                    <a href="">联系我们</a>
                </li>
                <li>
                    <a href="">Flyme</a>
                </li>
                <li>
                    <a href="">魅族社区</a>
                </li>
                <li>
                    <a href="">天猫旗舰店</a>
                </li>
                <li>
                    <a href="">问题反馈</a>
                </li>
                <li>
                    <a href="">线上销售授权名单公示</a>
                </li>
                <li>
                    <a href="">出版物经营许可证</a>
                </li>
                <li>
                    <a href="">简体中文</a>
                </li>
            </ul>
            <div class="certificate">
                ©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved.
                <a href="">粤ICP备13003602号</a>
                <a href="">合字B2-20170010 </a>
                <a href="">营业执照</a>
                <a href="">法律声明</a>
                <a href="">粤公网安备 44049102496009 号</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .layout {
        width: 1240px;
        margin: 0 auto;
    }
    .footer {
        width: 100%;
        background-color: white;
        bottom: 10px;
    }

    .meizu-footer {
        padding: 48px 0 20px;
        .service-container {
            padding-bottom: 15px;
            box-sizing: border-box;
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            &::after {
                content: "";
                display: block;
                clear: both;
            }
            .info-left {
                float: left;
                ul {
                    li {
                        width: 150px;
                        // height: 69px;
                        float: left;
                        img {
                            width: 50px;
                            height: 39px;
                            margin: 0 50px;
                        }
                        p {
                            width: 150px;
                            height: 14px;
                            color: #999999;
                            font-size: 12px;
                            text-align: center;
                            margin-top: 5px;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
            .info-right {
                width: 190px;
                height: 103px;
                float: right;
                margin-top: -10px;
                text-align: right;
                span {
                    color: #999999;
                    font-size: 12px;
                    margin-left: 30px;
                }
                .tel {
                    color: #008cff;
                    font-size: 25px;
                    margin: 5px 0;
                    white-space: nowrap;
                }
                a {
                    float: right;
                    width: 88px;
                    height: 30px;
                    color: #fff;
                    background-color: #008cff;
                    text-decoration: none;
                    border-radius: 20px;
                    font-size: 14px;
                    text-align: center;
                    line-height: 30px;
                    margin-left: 68px;
                }
            }
        }
        .footer-nav {
            &::after {
                content: "";
                display: block;
                clear: both;
            }
            li {
                float: left;
                border-right: 1px solid #d6d6d6;
                margin-right: 15px;
                padding-right: 15px;
                a {
                    text-decoration: none;
                    color: #999999;
                    font-size: 12px;
                }
            }
        }
        .certificate {
            color: #999999;
            font-size: 12px;
            margin: 10px 0 20px;
            a {
                text-decoration: none;
                color: #999999;
            }
        }
    }
</style>