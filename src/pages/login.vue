<template>
    <div class="login">
        <x-header title="登录"></x-header>
        <div>
            <group>
                <x-input title="用户名" name="username" placeholder="请输入用户名" />
                <x-input title="密码" type="password" name="password" placeholder="请输入密码" />
            </group>
            <div class="pd-wrap mt-20 fix-bottom">
                <x-button type="primary">登录</x-button>
                <x-button link="register">注册</x-button>
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
import {XHeader, Group, XInput, XButton} from 'vux'
export default {
    data(){
        return {

        }
    },
    components: {
        XHeader,
        Group,
        XInput,
        XButton
    }
}
</script>

