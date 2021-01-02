<template>
    <div>
        <Tabs value="name1">
            <TabPane label="已收藏商品" name="name1">
                <div class="goods" @mouseover="mouseOver" @mouseleave='mouseLeave'>
                    <Icon class="delete-icon" v-show='isShow' type="ios-trash-outline" size="24" @click="confirm" />
                    <div class="img-wrapper">
                        <img src="https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7g-AMmMHAAkLeDbS6O4698.png" alt="">
                    </div>
                    <div class="title">Pandaer 「17」系列 手机壳</div>
                </div>
            </TabPane>
        </Tabs>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            mouseOver() {
                this.isShow = true
            },
            mouseLeave() {
                this.isShow = false
            },
            confirm() {
                this.$Modal.confirm({
                    content: '<p>确定删除该收藏的商品吗？</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
        }
    }
</script>

<style lang="less" scoped>
    .goods {
        position: relative;
        width: 202px;
        padding: 35px 16px 30px;
        border: 1px solid #eee;
        text-align: center;
        &:hover {
            cursor: pointer;
        }
        .delete-icon {
            position: absolute;
            top: 8px;
            right: 8px;
        }
        .img-wrapper {
            width: 166px;
            height: 166px;
            img {
                width: 100%;
            }
        }
        .title {
            font-size: 16px;
            color: #666;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>