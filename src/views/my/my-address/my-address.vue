<template>
    <div class="my-address">
        <div class="title-wrapper">
            <span class="title">新增收货地址</span>
            <em>(您目前已有地址1个，还可以增加9个)</em>
        </div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Row>
                <i-col span="12">
                    <FormItem label="姓名" prop="name">
                        <Input v-model="formValidate.name" placeholder="请输入姓名" />
                    </FormItem>
                </i-col>
                <i-col span="12">
                    <FormItem label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="请输入邮箱" />
                    </FormItem>
                </i-col>
            </Row>
            <FormItem label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="请选择城市">
                    <Option value="beijing">北京</Option>
                    <Option value="shanghai">上海</Option>
                    <Option value="shenzhen">杭州</Option>
                </Select>
            </FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }

    }
</script>

<style lang="less" scoped>
    .my-address {
        padding-left: 25px;
    }
    .title-wrapper {
        color: #666;
        font-size: 14px;
        .title {
            font-size: 18px;
            font-weight: 700;
            margin-right: 10px;
        }
    }
</style>