<template>
    <div>
        <Tabs value="name1">
            <TabPane class="tab-item" label="全部订单" name="name1">
                <ul class="table-list">
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="近三个月的订单" placement='bottom-end'>
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
                    <li class="table-item">订单明细</li>
                    <li class="table-item">售后</li>
                    <li class="table-item">金额</li>
                    <li class="table-item">状态</li>
                    <li class="table-item">操作</li>
                </ul>
                <div class="main-table">
                    <div class="my-order">
                        下单时间：<span class="time">2020-11-26 13:25:59</span>
                        订单号：<span class="order-num">52112659251312583101</span>
                        <a href="#">联系客服</a>
                    </div>
                    <table class="table-content">
                        <tr class="order-info">
                            <td>
                                <div class="img-wrapper">
                                    <img src="https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png" alt="">
                                </div>
                                <div class="instruct">
                                    <p class="desc">
                                        魅族 EP3C 耳机 白色</p>
                                    <div class="price">
                                        ￥129 ×1
                                    </div>
                                </div>
                            </td>
                            <td rowspan="3">
                                <div class="total-price comm-right">￥ 3828</div>
                            </td>
                            <td rowspan="3">
                                <div class="state comm-right">已取消</div>
                            </td>
                            <td rowspan="3">
                                <div class="view-detail comm-right">查看详情</div>
                            </td>
                        </tr>
                        <tr class="order-info">
                            <td>
                                <div class="img-wrapper">
                                    <img src="https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png" alt="">
                                </div>
                                <div class="instruct">
                                    <p class="desc">
                                        魅族 EP3C 耳机 白色</p>
                                    <div class="price">
                                        ￥129 ×1
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr class="order-info">
                            <td>
                                <div class="img-wrapper">
                                    <img src="https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png" alt="">
                                </div>
                                <div class="instruct">
                                    <p class="desc">
                                        魅族 EP3C 耳机 白色</p>
                                    <div class="price">
                                        ￥129 ×1
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

            </TabPane>
            <TabPane label="待付款" name="name2">
                <ul class="table-list">
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="近三个月的订单" placement='bottom-end'>
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
                    <li class="table-item">订单明细</li>
                    <li class="table-item">售后</li>
                    <li class="table-item">金额</li>
                    <li class="table-item">状态</li>
                    <li class="table-item">操作</li>
                </ul>
                <div class="container">
                    <p class="tips">您暂无此类订单，赶快去下单吧！</p>
                </div>
            </TabPane>
            <TabPane label="待发货" name="name3">
                <ul class="table-list">
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="近三个月的订单" placement='bottom-end'>
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
                    <li class="table-item">订单明细</li>
                    <li class="table-item">售后</li>
                    <li class="table-item">金额</li>
                    <li class="table-item">状态</li>
                    <li class="table-item">操作</li>
                </ul>
                <div class="container">
                    <p class="tips">您暂无此类订单，赶快去下单吧！</p>
                </div>
            </TabPane>
            <TabPane label="已发货" name="name4">
                <ul class="table-list">
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="近三个月的订单" placement='bottom-end'>
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
                    <li class="table-item">订单明细</li>
                    <li class="table-item">售后</li>
                    <li class="table-item">金额</li>
                    <li class="table-item">状态</li>
                    <li class="table-item">操作</li>
                </ul>
                <div class="container">
                    <p class="tips">您暂无此类订单，赶快去下单吧！</p>
                </div>
            </TabPane>
            <TabPane label="其他" name="name5">
                <ul class="table-list">
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="近三个月的订单" placement='bottom-end'>
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
                    <li class="table-item">订单明细</li>
                    <li class="table-item">售后</li>
                    <li class="table-item">金额</li>
                    <li class="table-item">状态</li>
                    <li class="table-item">操作</li>
                </ul>
                <div class="container">
                    <p class="tips">您暂无此类订单，赶快去下单吧！</p>
                </div>
            </TabPane>
        </Tabs>

    </div>
</template>

<script>
    import headBar from '@/components/head-bar/head-bar'
    import mainFooter from '@/components/main-footer/main-footer'


    export default {
        components: {
            headBar,
            mainFooter,
        },
        data() {
            return {
                currentNum: 1,
                timeList: [
                    {
                        value: '近三个月的订单',
                        label: '近三个月的订单'
                    },
                    {
                        value: '全部订单',
                        label: '全部订单'
                    },
                ],
                model1: ''
            }
        },
        methods: {
        }

    }
</script>
<style lang="less" scoped>
    .table-list {
        margin: 20px 0;
        background: #fafafc;
        overflow: hidden;
        .table-item {
            float: left;
            padding: 0 50px;
            line-height: 45px;
            color: #666;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            &:nth-child(1) {
                padding: 0 0 0 20px;
            }
            &:nth-child(2) {
                padding: 0 58px 0 50px;
                margin: 0 80px 0 54px;
            }
        }
    }
    .main-table {
        overflow: hidden;
        .my-order {
            padding-left: 20px;
            font-size: 14px;
            color: #bdbdbd;
            line-height: 40px;
            border: 1px solid #efefef;
            border-bottom: none;
            background: #fafafc;
            .time,
            .order-num {
                color: #333;
                margin-right: 38px;
            }
        }
        .table-content {
            border: 1px solid #efefef;
            .order-info {
                border: 1px solid #efefef;
                td {
                    border-right: 1px solid #efefef;
                    &:nth-child(1) {
                        width: 592px;
                        padding: 0 20px;
                    }
                }
                .img-wrapper {
                    float: left;
                    width: 103px;
                    margin: 15px 25px 0 0;
                    img {
                        width: 100%;
                    }
                }
                .instruct {
                    float: left;
                    width: 350px;
                    padding-top: 25px;
                    line-height: 22px;
                    color: #666;
                    .desc {
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                .comm-right {
                    width: 128px;
                    text-align: center;
                }
                .total-price {
                    color: #e02b41;
                    font-weight: 600;
                }
            }
            .table-right {
                overflow: hidden;
                width: 375px;
                height: 100%;
                font-size: 14px;
                color: #666;
                text-align: center;
                border-top: 1px solid #efefef;
                .comm-right {
                    width: 126px;
                    height: 100%;
                    padding-top: 30px;
                }
                .total-price {
                    color: #e02b41;
                    font-weight: 600;
                }
            }
        }
    }
    .container {
        margin-top: 130px;
        .tips {
            color: #707979;
            font-size: 24px;
            text-align: center;
            &::after {
                content: "";
                display: block;
                height: 200px;
                background: url("https://store.res.meizu.com/member/img/noData-31ec95ea89.png")
                    center 60px no-repeat;
            }
        }
    }
</style>