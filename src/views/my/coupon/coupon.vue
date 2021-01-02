<template>
    <div>
        <Tabs value="name1">
            <TabPane label="可使用" name="name1">
                <div class="container">
                    <p class="tips">您暂无优惠券！</p>
                </div>

            </TabPane>
            <TabPane label="已使用" name="name2">
                <div class="container">
                    <p class="tips">您暂无优惠券！</p>
                </div>
            </TabPane>
            <TabPane label="已过期" name="name3">
                <div class="container">
                    <p class="tips">您暂无优惠券！</p>
                </div>
            </TabPane>
        </Tabs>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
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