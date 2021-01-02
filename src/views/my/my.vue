<template>
    <div class="my">
        <!-- 头部区域 -->
        <head-bar />
        <div class="container">
            <div class="mall-wrapper layout">
                <Breadcrumb separator=">" class="left-nav">
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/">我的商城</BreadcrumbItem>
                    <BreadcrumbItem>我的订单</BreadcrumbItem>
                </Breadcrumb>
                <div class="main">
                    <div class="main-left">
                        <Menu active-name="2" @on-select="selectHandle">
                            <MenuGroup title="订单中心">
                                <MenuItem name="1"> 我的订单 </MenuItem>
                                <MenuItem name="2"> 我的回购单 </MenuItem>
                            </MenuGroup>
                            <MenuGroup title="个人中心">
                                <MenuItem name="3">
                                地址管理
                                </MenuItem>
                                <MenuItem name="4">
                                我的收藏
                                </MenuItem>
                                <MenuItem name="5">
                                消息提醒
                                </MenuItem>
                                <MenuItem name="6">
                                建议反馈
                                </MenuItem>
                            </MenuGroup>
                            <MenuGroup title="资产中心">
                                <MenuItem name="7">
                                我的优惠券
                                </MenuItem>
                                <MenuItem name="8">
                                我的红包
                                </MenuItem>
                                <MenuItem name="9">
                                我的回购金
                                </MenuItem>
                            </MenuGroup>
                            <MenuGroup title="服务中心">
                                <MenuItem name="10">
                                退款/退换货跟踪
                                </MenuItem>
                                <MenuItem name="11">
                                以旧换新
                                </MenuItem>
                            </MenuGroup>
                        </Menu>
                    </div>
                    <div class="main-right">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部区域 -->
        <main-footer />
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

            }
        },
        methods: {
            selectHandle(name) {
                switch (name) {
                    case '1':
                        this.$router.push({ name: 'myOrder' })
                        break
                    case '2':
                        this.$router.push({ name: 'buyback' })
                        break
                    case '3':
                        this.$router.push({ name: 'address' })
                        break
                    case '4':
                        this.$router.push({ name: 'favorite' })
                        break
                    case '5':
                        this.$router.push({ name: 'message' })
                        break
                    case '6':
                        this.$router.push({ name: 'advice' })
                        break
                    case '7':
                        this.$router.push({ name: 'coupon' })
                        break
                    case '8':
                        this.$router.push({ name: 'redenvelope' })
                        break
                    case '9':
                        this.$router.push({ name: 'repurchaseFund' })
                        break
                    case '10':
                        this.$router.push({ name: 'afterSale' })
                        break
                    case '11':
                        this.$router.push({ name: 'mycycle' })
                        break
                }
            }
        },


    }
</script>

<style lang="less" scoped>
    .container {
        padding-bottom: 30px;
        border-bottom: 1px solid #efefef;
        overflow: hidden;
        .mall-wrapper {
            .left-nav {
                margin: 10px 0 24px;
            }
            .main {
                overflow: hidden;
                .main-left {
                    float: left;
                    width: 240px;
                    margin-right: 20px;
                }
                .main-right {
                    float: left;
                    width: 980px;
                }
            }
        }
    }
</style>