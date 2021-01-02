<template>
    <div class="list-wrapper">
        <!--顶部区域-->
        <head-bar />
        <!-- 手机列表 -->
        <div class="mobile" v-if="type==1">
            <!--广告区域-->
            <div class="banner">
                <img src="https://fms.res.meizu.com/dms/2020/06/03/d750105f-7a92-4146-a254-54d9427c6169.jpg" />
            </div>
            <div class="container">
                <div class="title-box layout">
                    <h2 class="title-left">手机</h2>
                    <div class="title-right">
                        <span>推荐</span>
                        <span>新品</span>
                        <span>价格</span>
                    </div>
                </div>
                <ul class="clear-fix layout">
                    <LiPlus :type="5" v-for="item in mobileList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
        </div>
        <!-- 声学列表 -->
        <div class="acoustics" v-else-if="type==2">
            <!--广告区域-->
            <div class="banner">
                <img src="https://openfile.meizu.com/group1/M00/08/43/Cgbj0V-ReXyADOqXAAXCq1v60rM818.jpg" alt="">
            </div>
            <div class="container">
                <div class="title-box layout">
                    <h2 class="title-left">声学</h2>
                    <div class="title-right">
                        <span>推荐</span>
                        <span>新品</span>
                        <span>价格</span>
                    </div>
                </div>
                <ul class="clear-fix layout">
                    <LiPlus :type="5" v-for="item in acousticsList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
        </div>
        <!-- 配件列表 -->
        <div class="accessory" v-else-if="type==3">
            <!--广告区域-->
            <div class="banner">
                <img src="https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F62dEqAbj_DAANcU84ItMs821.jpg" alt="">
            </div>
            <div class="container">
                <div class="title-box layout">
                    <h2 class="title-left">配件</h2>
                    <div class="title-right">
                        <span>推荐</span>
                        <span>新品</span>
                        <span>价格</span>
                    </div>
                </div>
                <ul class="clear-fix layout">
                    <LiPlus :type="5" v-for="item in accessoryList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
        </div>
        <!-- 生活列表 -->
        <div class="life-around" v-else-if="type==4">
            <!--广告区域-->
            <div class="banner">
                <img src="https://openfile.meizu.com/group1/M00/07/EA/Cgbj0V62f86AIEJyAA2ApFFeZ2k604.jpg" alt="">
            </div>
            <div class="container">
                <div class="title-box layout">
                    <h2 class="title-left">生活周边</h2>
                    <div class="title-right">
                        <span>推荐</span>
                        <span>新品</span>
                        <span>价格</span>
                    </div>
                </div>
                <ul class="clear-fix layout">
                    <LiPlus :type="5" v-for="item in lifeAroundList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="compare layout">
                <img src="https://openfile.meizu.com/group1/M00/07/59/Cgbj0F2Ap0-AGOBcAAmkKASkDYw805.jpg" alt="">
            </div>
            <div class="title-box layout">
                <h2 class="title-left">为您推荐</h2>
            </div>
            <ul class="recommend layout">
                <li class="recommend-list">
                    <div class="img-box">
                        <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@480x480.jpg" alt="">
                    </div>
                    <h4 class="name">魅族 17</h4>
                    <div class="price"><i>￥</i>3699</div>
                </li>
                <li class="recommend-list">
                    <div class="img-box">
                        <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@480x480.jpg" alt="">
                    </div>
                    <h4 class="name">魅族 17</h4>
                    <div class="price"><i>￥</i>3699</div>
                </li>
                <li class="recommend-list">
                    <div class="img-box">
                        <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@480x480.jpg" alt="">
                    </div>
                    <h4 class="name">魅族 17</h4>
                    <div class="price"><i>￥</i>3699</div>
                </li>
                <li class="recommend-list">
                    <div class="img-box">
                        <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@480x480.jpg" alt="">
                    </div>
                    <h4 class="name">魅族 17</h4>
                    <div class="price"><i>￥</i>3699</div>
                </li>
            </ul>
        </div>
        <!-- 底部 -->
        <main-footer />
    </div>
</template>

<script>
    import headBar from '@/components/head-bar/head-bar'
    import LiPlus from '@/components/li-plus/li-plus'
    import mainFooter from '@/components/main-footer/main-footer'

    import mobileList from '@/data/mobileList'
    import acousticsList from '@/data/acousticsList'
    import accessoryList from '@/data/accessoryList'
    import lifeAroundList from '@/data/lifeAroundList'

    export default {
        components: {
            headBar,
            mainFooter,
            LiPlus
        },
        data() {
            return {
                mobileList,
                acousticsList,
                accessoryList,
                lifeAroundList
            }
        },
        computed: {
            type() {
                return this.$route.query.type
            }
        },
    }
</script>

<style lang="less" scoped>
    .layout {
        width: 1240px;
        margin: 0 auto;
    }
    // 广告区域
    .banner {
        width: 100%;
        height: 400px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    // container
    .container {
        padding: 80px 0;
        box-sizing: border-box;
        background: #f4f4f4;
        &::after {
            content: "";
            display: table;
            clear: both;
        }
        .title-box {
            height: 30px;
            margin: 0px auto 25px;
            line-height: 30px;
            .title-left {
                float: left;
                color: #515151;
                font-size: 30px;
            }
            .title-right {
                float: right;
                color: #343434;
                font-size: 18px;
                span {
                    padding: 0 10px;
                    box-sizing: border-box;
                    margin-right: 15px;
                }
            }
        }
        .compare {
            margin-bottom: 80px;
            img {
                width: 100%;
            }
        }
        .recommend {
            background: #fff;
            &::after {
                content: "";
                display: table;
                clear: both;
            }
            .recommend-list {
                float: left;
                width: 310px;
                padding: 40px 0;
                .img-box {
                    width: 230px;
                    margin: 0 auto;
                    img {
                        width: 100%;
                    }
                }
                .name {
                    margin: 36px 0 20px;
                    text-align: center;
                    color: #2b2b2b;
                    font-size: 20px;
                }
                .price {
                    text-align: center;
                    color: #cc0000;
                    font-size: 26px;
                    i {
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>