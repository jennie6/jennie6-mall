<template>
    <div>
        <Tabs value="name1">
            <TabPane label="售后退换货" name="name1">
                <ul class="table-list">
                    <li class="table-item">订单商品</li>
                    <li class="table-item">退款金额</li>
                    <li class="table-item">
                        <Select v-model="model1" style="width:150px" placeholder="全部状态" placement='bottom-end'>
                            <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </li>
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
    export default {
        data() {
            return {
                statusList: [
                    {
                        value: '待售后处理',
                        label: '待售后处理'
                    },
                    {
                        value: '商品待寄回',
                        label: '商品待寄回'
                    },
                    {
                        value: '换货商品待收货',
                        label: '换货商品待收货'
                    },
                    {
                        value: '待售后验收',
                        label: '待售后验收'
                    },
                    {
                        value: '售后完成',
                        label: '售后完成'
                    },
                    {
                        value: '售后关闭',
                        label: '售后关闭'
                    },
                ],
            }
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
            margin: 0 35px;
            line-height: 45px;
            color: #666;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
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