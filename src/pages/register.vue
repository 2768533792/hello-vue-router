<template>
    <div class="register">
        <x-header title="注册"></x-header>
        <div>
            <group label-width="90px">
                <x-input title="用户名" name="username" placeholder="请输入用户名" required :min="4" :max="10" />
                <x-input title="密码" type="password" name="password" placeholder="请输入密码" />
                <x-input title="重复密码" type="password" name="password2" placeholder="请再次输入密码" />
                <x-input title="验证码">
                    <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg" />
                </x-input>
            </group>
            <div style="padding: 20px 10px;">
                <check-icon :value.sync="no">同意注册协议</check-icon>
            </div>
            <div class="pd-wrap mt-20 fix-bottom">
                <x-button type="primary">注册</x-button>
                <x-button link="login">登录</x-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.pd-wrap {
    width: 94%;
    padding: 0 3%;
}
.mt-20 {
    margin-top: 20px;
}
.fix-bottom {
    position: fixed;
    bottom: 20px;
}
</style>

<script>
import {XHeader, Group, XInput, XButton, CheckIcon} from 'vux'
export default {
    data(){
        return {
            no: false
        }
    },
    components: {
        XHeader,
        Group,
        XInput,
        XButton,
        CheckIcon
    }
}
</script>

