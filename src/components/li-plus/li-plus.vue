<template>
    <!-- goods-item -->
    <li class="goods-item" v-if="type==1">
        <span class="product-sign" v-if="item.status.includes('1')">新品</span>
        <img :src="item.image" />
        <h3>{{item.name}}</h3>
        <h4>{{item.desc}}</h4>
        <div class="price">
            ￥{{item.price}}
            <span class="discount" v-if="item.status.includes('2')">{{item.oldPrice}}</span>
        </div>
    </li>
    <!-- hot-item -->
    <li class="hot-item" v-else-if="type==3">
        <div class="top-img">
            <img :src="item.image" alt="" />
        </div>
        <div class="user-name">
            <img :src="item.header" />
            <span>{{item.user}}</span>
        </div>
        <p>{{item.desc}}</p>
        <h4>{{item.name}}</h4>
    </li>
    <!--flyme-item -->
    <li class="flyme-item" v-else-if="type == 4">
        <img :src="item.image" />
        <div class="info-im" v-if="item.icon">
            <img src="~@/assets/image/home/vi.png" />
        </div>
        <p>{{item.desc}}</p>
    </li>
    <!-- list-item -->
    <li class="list-item" v-else-if="type == 5">
        <div class="goods-image">
            <img :src="item.image" alt="">
        </div>
        <div class="introduction">
            <h3 class="name">{{item.name}}</h3>
            <p class="desc">{{item.desc}}</p>
            <div class="price">
                <span class="preference-txt" v-if="item.status.includes('3')">限时特惠</span>
                <i>￥</i>{{item.price}}</div>
        </div>
    </li>
    <!-- 首页导航list -->
    <li class="nav-item" v-else-if="type == 6">
        <img :src="item.image" alt="">
        <div class="name">{{item.name}}</div>
        <p class="price">￥ {{item.price}}}</p>
    </li>
</template>

<script>
    export default {
        props: {
            type: Number,
            item: Object
        }

    }
</script>

<style lang="less" scoped>
    .goods-item {
        float: left;
        width: 300px;
        text-align: center;
        margin: 10px 10px 0 0;
        padding-bottom: 15px;
        box-sizing: border-box;
        background-color: #fff;
        &:hover {
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 1px 2px 4px #ddd;
        }
        .product-sign {
            display: block;
            width: 60px;
            height: 60px;
            color: #fff;
            border-radius: 50%;
            background-color: #ff64a6;
            font-size: 16px;
            line-height: 60px;
            text-align: center;
            position: absolute;
            top: 30px;
            left: 30px;
        }
        h3 {
            color: #333333;
            font-size: 16px;
            margin-bottom: 2px;
        }
        h4 {
            color: #999999;
            font-size: 14px;
            padding: 10px 0;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price {
            color: #cc0000;
            font-size: 22px;

            .discount {
                text-decoration: line-through;
                color: #666;
                font-size: 14px;
                margin-left: 8px;
            }
        }
        img {
            width: 230px;
            margin-top: 30px;
        }
    }
    // flyme的li样式
    .flyme-item {
        float: left;
        width: 303px;
        margin-right: 5px;
        margin-bottom: 10px;
        background-color: #fff;
        &:hover {
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 1px 2px 4px #ddd;
        }
        img {
            width: 100%;
            vertical-align: middle;
        }
        .info-im {
            width: 30px;
            height: 30px;
            float: right;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                bottom: 48px;
                right: 21px;
            }
        }
        p {
            height: 55px;
            line-height: 55px;
            color: #515151;
            font-size: 16px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    // 热帖li的样式
    .hot-item {
        width: 300px;
        float: left;
        margin: 0 10px 10px 0;
        background: #fff;
        &:hover {
            cursor: pointer;
        }
        .top-img {
            width: 300px;
            height: 190px;
            img {
                width: 100%;
            }
        }
        .user-name {
            height: 42px;
            line-height: 21px;
            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                float: left;
                margin: 6px 10px;
            }
            span {
                float: left;
                margin-left: 10px;
                margin-top: 10px;
            }
        }
        p {
            height: 66px;
            white-space: wrap;
            font-size: 16px;
            line-height: 27px;
            padding: 10px 15px 10px;
            text-align: left;
            color: #515151;
            box-sizing: border-box;
        }
        h4 {
            height: 21px;
            color: #999;
            font-size: 14px;
            text-align: left;
            margin: 15px;
        }
    }
    // 列表li 的样式
    .list-item {
        float: left;
        width: 400px;
        padding: 40px 0 28px;
        box-sizing: border-box;
        background: #fff;
        margin: 0 12px 12px 0;
        &:hover {
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 1px 2px 4px #ddd;
        }
        .goods-image {
            width: 320px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        .introduction {
            padding: 10px 40px;
            box-sizing: border-box;
            margin-top: 30px;
            text-align: center;
            .name {
                color: #333;
                font-size: 22px;
            }
            .desc {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 16px;
                color: #666;
                margin: 10px 0;
            }
            .price {
                color: #cc0000;
                font-size: 28px;
                .preference-txt {
                    font-size: 14px;
                    margin-right: 4px;
                }
                i {
                    font-size: 14px;
                }
            }
        }
    }
    //首页导航list的样式
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
</style>