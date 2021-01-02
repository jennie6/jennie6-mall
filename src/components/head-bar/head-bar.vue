<template>
    <div class="top" :class="{isPosition:$route.name=='home',active:currentId}">
        <div class="layout clear-fix">
            <div class="left">
                <h1 @click="$router.push({name:'home'})">
                    <svg style="width: 100%;" fill="#008cff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="402.048px" height="73.556px" viewBox="17.318 5.824 402.048 73.556" enable-background="new 17.318 5.824 402.048 73.556">
                        <path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path>
                        <rect x="226.517" y="5.824" width="14.426" height="73.556"></rect>
                        <path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824"></path>
                        <path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z"></path>
                        <path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
                    </svg>
                </h1>
            </div>
            <ul class="top-nav">
                <li v-for="item in navList" :key="item.id" @click="navHandle(item)" @mouseover="mouseOver(item)" @mouseleave='mouseLeave(item)'>{{item.title}}</li>
            </ul>
            <div class="right">

                <Input class="search-input" search placeholder="魅族 16T" style="width: 140px;" />
                <!-- <input type="text" placeholder="" /> -->
                <Dropdown v-if="$route.name=='home'">
                    <a class="user-img" href="javascript:void(0)">
                        <img src="@/assets/image/home/header-user1.png" />
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem @click.native="$router.push({name:'login'})">立即登录</DropdownItem>
                        <DropdownItem @click.native="$router.push({name:'regist'})">立即注册</DropdownItem>
                        <DropdownItem @click.native="$router.push({name:'my'})">我的订单</DropdownItem>
                        <DropdownItem>M码通道</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown v-else-if="$route.name!='home'">
                    <a class="user-img" href="javascript:void(0)">
                        <img src="https://image-res.mzres.com/image/uc/23e45ad8736341fcbc30b789c4717dc3z?t=946656000000" alt="" />
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>我的订单</DropdownItem>
                        <DropdownItem>消息通知</DropdownItem>
                        <DropdownItem>我的收藏</DropdownItem>
                        <DropdownItem>M码通道</DropdownItem>
                        <DropdownItem>退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown placement="bottom-end">
                    <a class="cart" href="javascript:void(0)">
                        <img src="@/assets/image/home/header-cart1.png" alt="" />
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>
                            <p class="drop-txt" v-if="$route.name=='home'">
                                登录后可显示<br />
                                您账号中已加入的商品哦~
                            </p>
                            <p class="drop-txt" v-else-if="$route.name=='my'">
                                你的购物车还没有商品<br />
                                赶紧去选购吧~
                            </p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </div>

        </div>
        <ul class="nav-list" v-if="currentId==1" :class="{active:currentId==1}">
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
        </ul>
        <ul class="nav-list" v-if="currentId==2" :class="{active:currentId==2}">
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
        </ul>
        <ul class="nav-list" v-if="currentId==3" :class="{active:currentId==3}">
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
        </ul>
        <ul class="nav-list" v-if="currentId==4" :class="{active:currentId==4}">
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
            <li class="nav-item">
                <img src="https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png" alt="">
                <div class="name">魅族 17「AG梦幻独角兽」</div>
                <p class="price">￥ 3699</p>
            </li>
        </ul>

    </div>
</template>

<script>

    import navList from '@/data/head'


    export default {
        data() {
            return {
                navList,
                currentId: ''
            }
        },
        methods: {
            navHandle(item) {
                if (item.type) {
                    this.$router.push({ name: 'list', query: { type: item.type } })
                }
            },
            mouseOver(item) {
                // if (this.$route.name == 'home') {
                //     }
                this.currentId = item.id
            },
            mouseLeave(item) {
                this.currentId = ''
            },
        }
    }
</script>

<style lang="less" scoped>
    .top {
        background: #fff;
        position: relative;
        border-bottom: 1px solid #efefef;
        .left {
            float: left;
            width: 125px;
            height: 100%;
            cursor: pointer;
        }
        .top-nav {
            float: left;
            height: 100%;
            line-height: 82px;
            margin-left: 50px;
            white-space: nowrap;
            li {
                float: left;
                height: 100%;
                padding: 0 20px;
                box-sizing: border-box;
                color: #515151;
                font-size: 14px;
                &:hover {
                    color: steelblue;
                    cursor: pointer;
                }
            }
        }
        .right {
            float: right;
            width: 240px;
            padding-top: 25px;
            .search-input {
                float: left;
            }
            .user-img,
            .cart {
                display: inline-block;
                margin-left: 15px;
                width: 29px;
            }
            img {
                width: 100%;
                vertical-align: middle;
                border-radius: 50%;
            }
            .drop-txt {
                padding: 20px 30px;
            }
        }
    }
    .nav-list {
        overflow: hidden;
        padding: 0 200px;
        .nav-item {
            width: 130px;
            float: left;
            text-align: center;
            padding: 15px;
            box-sizing: border-box;
            img {
                width: 100px;
            }
            .name {
                font-size: 14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .price {
                font-size: 12px;
            }
        }
    }
    // 顶部浮动
    .isPosition {
        width: 100%;
        background: transparent;
        position: absolute;
        top: 0;
        z-index: 899;
        border-bottom: none;
    }
    //
    .active {
        background-color: #fff;
        transition: background-color 1s;
    }
</style>