<template>
    <div class="us">
        <h2>用户设置</h2>
        <div class="us__nav">
            <router-link to="/settings/emails" class="us__nav--btn">邮箱</router-link>
            <router-link to="/settings/profile" class="us__nav--btn">简介</router-link>     
        </div>
        <router-view class="us__content"/>
        <router-view name="helper" class="us__content us__content--helper"/>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
.us__nav--btn {
    display: inline-block;
    border-radius: 5px;
    height: 24px;
    line-height: 24px;
    background: #999;
    color: #fff;
    padding: 0 10px;
    text-decoration: none;
}
.router-link-active {
    background-color: #222;
}
</style>