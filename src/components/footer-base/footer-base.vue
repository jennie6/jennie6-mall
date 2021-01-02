<template>
    <div class="footer">
        <div class="layer">
            <ul>
                <li>
                    关于魅族
                </li>
                <li>
                    工作机会
                </li>
                <li>
                    联系我们
                </li>
                <li>
                    法律声明
                </li>
                <li>
                    常见问题
                </li>
                <li>
                    简体中文
                </li>
            </ul>
            <div class="contact">
                <span class="hotline">客服热线</span>
                <span class="tel">400-788-3333</span>
                <a href="">在线客服</a>
            </div>
        </div>
        <div class="copy">
            <div class="footer-certificate">
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
    .footer {
        .layer {
            width: 1000px;
            height: 61px;
            padding: 20px 0;
            box-sizing: border-box;
            margin: 24px auto 10px;
            ul {
                float: left;
                margin-right: 30px;
                li {
                    float: left;
                    height: 16px;
                    line-height: 16px;
                    border-right: 1px solid #888888;
                    padding: 0 10px;
                    box-sizing: border-box;
                    color: #000;
                    font-size: 14px;
                }
            }
            .contact {
                float: left;
                // margin: 20px 280px 20px 20px;
                .hotline,
                .tel {
                    color: #000;
                    margin-right: 10px;
                    font-size: 14px;
                }
                a {
                    display: inline-block;
                    width: 64px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    text-decoration: none;
                    background-color: #32a5e7;
                    color: #fff;
                    font-size: 14px;
                }
            }
        }
        .copy {
            width: 1000px;
            height: 14px;
            padding-left: 10px;
            box-sizing: border-box;
            margin: 0 auto;
            .footer-certificate {
                color: #7f7f7f;
                font-size: 12px;
                a {
                    color: #7f7f7f;
                    text-decoration: none;
                    margin-left: 5px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>