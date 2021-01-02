<template>
    <div class="home">
        <!--顶部区域-->
        <head-bar />
        <!--广告区域-->
        <div class="banner">
            <Carousel loop>
                <CarouselItem v-for="item in bannerList" :key="item.id">
                    <div class="demo-carousel">
                        <img :src="item.image" />
                    </div>
                </CarouselItem>
            </Carousel>
        </div>

        <!-- 推荐 -->
        <div class="recommend">
            <ul class="recommend-adv layout">
                <li>
                    <img src="~@/assets/image/home/box-img1.jpg" alt="" />
                    <h3>17狂欢购</h3>
                    <p>签到赢魅族17</p>
                </li>
                <li>
                    <img src="~@/assets/image/home/box-img2.jpg" alt="" />
                    <h3>配件狂欢购</h3>
                    <p>享 618 好价</p>
                </li>
                <li>
                    <img src="~@/assets/image/home/box-img3.jpg" alt="" />
                    <h3>魅族 17</h3>
                    <p>十七度灰</p>
                </li>
                <li>
                    <img src="~@/assets/image/home/box-img4.jpg" alt="" />
                    <h3>mCycle</h3>
                    <p>以旧换新</p>
                </li>
            </ul>
        </div>
        <div class="content ">
            <module-title title='手机' />
            <div class="adv">
                <img src="~@/assets/image/home/big.jpg" alt="" />
            </div>
            <div class="goods-adv">
                <ul class="box1 layout">
                    <li @click="toDetail">
                        <span class="product-sign">现货</span>
                        <h2>魅族 17</h2>
                        <h3>高通骁龙 865 + UFS 3.1 高速闪存 | 6400W 全场景影像系统</h3>
                        <div class="price">￥3699</div>
                        <img src="~@/assets/image/home/imgPhone1.png" alt="" />
                    </li>
                    <li>
                        <span class="product-sign">现货</span>
                        <h2>魅族 17 Pro</h2>
                        <h3>
                            高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统
                        </h3>
                        <div class="price">￥4299</div>
                        <img src="~@/assets/image/home/imgPhone2.png" alt="" />
                    </li>
                </ul>
                <ul class="clear-fix layout">
                    <LiPlus :type="1" v-for="item in phoneList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
            <module-title title='魅族声学' />
            <div class="adv">
                <img src="~@/assets/image/home/big.jpg" alt="" />
            </div>
            <div class="goods-adv ">
                <ul class="clear-fix layout">
                    <LiPlus :type="1" v-for="item in voiceList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
            <module-title title='智能配件' />
            <div class="adv">
                <img src="https://fms.res.meizu.com/dms/2020/08/25/7c2e630e-e7c2-4480-946f-92fabf681036.jpg" alt="" />
            </div>
            <div class="goods-adv ">
                <ul class="clear-fix layout">
                    <LiPlus :type="1" v-for="item in partList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
            <module-title title='生活周边' />
            <div class="adv">
                <img src="https://fms.res.meizu.com/dms/2020/08/04/e221fe7d-80f6-42bb-b85b-b42fd6bffd25.jpg" alt="">
            </div>
            <div class="goods-adv ">
                <ul class="clear-fix layout">
                    <LiPlus :type="1" v-for="item in lifeList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
            <module-title title='社区热贴' />
            <ul class="clear-fix layout ">
                <LiPlus :type="3" v-for="item in hotList" :key="item.id" :item='item'></LiPlus>
            </ul>
            <module-title title='Flyme' />
            <div class="layout clear-fix">
                <div class="big-box">
                    <img src="@/assets/image/home/Fly1.png" alt="" />
                </div>
                <ul>
                    <LiPlus :type="4" v-for="item in flymeList" :key="item.id" :item='item'></LiPlus>
                </ul>
            </div>
            <module-title title='精彩视频' />
            <ul class="clear-fix layout">
                <LiPlus :type="4" v-for="item in videoList" :key="item.id" :item='item'></LiPlus>
            </ul>
        </div>
        <!--底部区域-->
        <main-footer />
    </div>
</template>

<script>
    import LiPlus from '@/components/li-plus/li-plus'
    import headBar from '@/components/head-bar/head-bar'
    import moduleTitle from '@/components/module-title/module-title'
    import mainFooter from '@/components/main-footer/main-footer'

    import bannerList from '@/data/banner'
    import phoneList from '@/data/phoneList'
    import flymeList from '@/data/flymeList'
    import hotList from '@/data/hotList'
    import videoList from '@/data/videoList'
    import voiceList from '@/data/voiceList'
    import partList from '@/data/partList'
    import lifeList from '@/data/lifeList'

    export default {
        components: {
            headBar,
            moduleTitle,
            mainFooter,
            LiPlus
        },
        data() {
            return {
                bannerList,
                phoneList,
                flymeList,
                hotList,
                videoList,
                voiceList,
                partList,
                lifeList,
            }
        },
        created() {
        },
        methods: {
            toDetail() {
                this.$router.push({ name: 'detail' })
            }
        }
    }
</script>

<style lang="less" scoped>
    // 广告区域
    .banner {
        width: 100%;
        .demo-carousel {
            height: 500px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    // 推荐
    .recommend {
        overflow: hidden;
        padding-bottom: 30px;
        background: #fff;
        .recommend-adv {
            &::after {
                content: "";
                display: table;
                clear: both;
            }
            li {
                float: left;
                width: 310px;
                height: 187px;
                margin-top: 45px;
                text-align: center;
                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }
                img {
                    width: 130px;
                    margin: 0 auto;
                }
                h3 {
                    height: 30px;
                    color: #333333;
                    font-size: 20px;
                }
                p {
                    height: 21px;
                    color: #999999;
                    font-size: 14px;
                }
            }
        }
    }
    // 内容区域
    .content {
        &::after {
            content: "";
            display: table;
            clear: both;
        }
        background-color: #f4f4f4;
        .adv {
            img {
                width: 100%;
                height: 400px;
                &:hover {
                    cursor: pointer;
                    opacity: 0.9;
                }
            }
        }
    }
    .goods-adv {
        ul {
            li {
                float: left;
                box-sizing: border-box;
                position: relative;
                &:hover {
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 4px 3px 4px #ddd;
                }
            }
        }
        .box1 {
            li {
                position: relative;
                width: 610px;
                margin-right: 10px;
                margin-top: 10px;
                text-align: center;
                background-color: #fff;
                overflow: hidden;
                img {
                    width: 460px;
                    margin: 0 auto;
                }
                .product-sign {
                    display: block;
                    width: 55px;
                    height: 55px;
                    color: #fff;
                    border-radius: 50%;
                    background-color: #ff64a6;
                    font-size: 16px;
                    line-height: 60px;
                    text-align: center;
                    position: absolute;
                    top: 25px;
                    left: 30px;
                }
                h2 {
                    color: #333333;
                    font-size: 28px;
                    padding-top: 34px;
                    box-sizing: border-box;
                    margin-bottom: 0px;
                }
                h3 {
                    color: #333333;
                    font-size: 18px;
                    // margin: 5px 0;
                }
                .price {
                    color: #cc0000;
                    font-size: 22px;
                }
            }
        }
    }

    // Flyme
    .big-box {
        float: left;
        width: 615px;
        margin-right: 5px;
        margin-bottom: 10px;
        background-color: #fff;
        &:hover {
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0px -1px 1px #ddd;
        }
        img {
            width: 100%;
            vertical-align: middle;
        }
    }
</style>