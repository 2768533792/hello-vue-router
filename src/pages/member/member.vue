<template>
    <div class="member">
        <x-header :left-options="{showBack:false}">个人中心</x-header>
        <div class="member-top ta-c">
            <div class="user-avatar mb-15"><img :src="userAvatar" /></div>
            <div class="username">青溪</div>
        </div>
        <group>
            <cell title="我的订单" link="orders" is-link>
                <img slot="icon" :src="memberIcons.iconOrder" class="member-icon" />
            </cell>
            <cell title="个人信息" link="userinfo" is-link>
                <img slot="icon" :src="memberIcons.iconUserinfo" class="member-icon" />
            </cell>
            <cell title="设置" link="setting" is-link>
                <img slot="icon" :src="memberIcons.iconSetting" class="member-icon" />
            </cell>
            <cell title="退出" link="" is-link>
                <img slot="icon" :src="memberIcons.iconExit" class="member-icon" />
            </cell>
        </group>    
    </div>
</template>
<style scoped>
    .member-top {
        height: 120px;
        width: 100%;
        background: #09BB07;
        color: #fff;
        padding: 20px 0;
    }
    .member-icon {
        margin-right: 10px;
        width: 20px;
    }
</style>

<script>
export default {
    data() {
        return {
            userAvatar: require('@/assets/img/user-avatar.png'),
            memberIcons: {
                iconOrder: require('@/assets/img/icon-order.png'),
                iconUserinfo: require('@/assets/img/icon-userinfo.png'),
                iconSetting: require('@/assets/img/icon-setting.png'),
                iconExit: require('@/assets/img/icon-exit.png') 
            }
        }
    }
}
</script>

