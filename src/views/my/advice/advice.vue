<template>
    <div>
        <div class="img-wrapper">
            <img src="https://openfile.meizu.com/group1/M00/04/99/Cgbj0FsWAnWAIQG1AACdP24q8BE344.png" alt="">
            <div class="contact-box">
                <p class="contact-txt">如果您的问题急需处理，请咨询我们
                    <br />
                    全国服务热线或在线客服！
                </p>
                <div class="time">周一至周日 7:30-24:00</div>
                <div class="tel">400-788-3333</div>
                <Button type="primary" icon="ios-text" class="service">在线客服</Button>

            </div>
        </div>
        <div class="title">您想对哪一方面提出建议</div>
        <div>
            <Select v-model="model1" style="width:200px" placeholder="请选择问题分类">
                <Option v-for="item in suggestList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <div class="title">请详细描述您的问题</div>
        <Input v-model="value6" style="width:480px" type="textarea" :rows="8" />
        <div class="title">邮箱（选填）</div>
        <div class="email-input">
            <Input v-model="value" style="width: 300px" />
        </div>
        <Button type="primary">提交</Button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                suggestList: [
                    {
                        value: '购物体验',
                        label: '购物体验'
                    },
                    {
                        value: '支付流程',
                        label: '支付流程'
                    },
                    {
                        value: '活动建议',
                        label: '活动建议'
                    },
                    {
                        value: '商品建议',
                        label: '商品建议'
                    },
                    {
                        value: '其他建议',
                        label: '其他建议'
                    },

                ],
                model1: '',
                value6: '',
                value: ''
            }
        }

    }
</script>

<style lang="less" scoped>
    .img-wrapper {
        position: relative;
        width: 830px;
        height: 220px;
        img {
            width: 100%;
        }
        .contact-box {
            position: absolute;
            top: 36px;
            right: 15px;
            width: 240px;
            text-align: center;
            .contact-txt {
                font-size: 14px;
                color: #666;
            }
            .time {
                color: #999;
                font-size: 12px;
                margin-top: 18px;
            }
            .tel {
                color: #00c3f5;
                font-size: 20px;
            }
            .service {
                font-size: 14px;
            }
        }
    }
    .title {
        color: #666;
        font-size: 12px;
        margin: 10px 0;
    }
    .email-input {
        margin-bottom: 20px;
    }
</style>