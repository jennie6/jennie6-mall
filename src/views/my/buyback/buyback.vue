<template>
    <div>
        <Tabs value="name1">
            <TabPane label="回购单列表" name="name1">
                <ul class="table-list">
                    <li>产品型号</li>
                    <li>回购价格</li>
                    <li>评估描述情况</li>
                    <li>当前回购状态</li>
                    <li>操作</li>
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
            }
        },
    }
</script>

<style lang="less" scoped>
    .table-list {
        margin: 20px 0;
        background: #fafafc;
        overflow: hidden;
        li {
            float: left;
            padding: 0 65px;
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