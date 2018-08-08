<template>
    <div class="indexfloor3">
        <div class="indexfloor3-hd">{{floorTitle}}</div>
        <div class="goods-list">
            <div class="goods-item clearfix" v-for="(item, index) in floorDatas" :key="index">
                <div class="goods-item-l">
                    <img :src="item.src">
                </div>
                <div class="goods-item-r">
                    <div class="goods-title">{{item.title}}</div>
                    <div class="goods-subtitle">{{item.subtitle}}</div>
                    <div class="goods-params">价格：{{item.price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['floorTitle', 'floorData'],
    data() {
        return {
            floorDatas: []
        }
    },
    created: function() {
        this.floorDatas = this.floorData
    }
}
</script>

<style lang="scss" scoped>
/* 商品列表 */
.indexfloor3 {
    width: 94%;
    margin: 0 auto;
    margin-top: 20px;
    .indexfloor3-hd {
        margin-bottom: 20px;
    }
}
.goods-item {
    margin-bottom: 20px;
    .goods-item-l {
        width: 30%;
        float: left;
        margin-right: 2%;;
    }
    img {
        width: 100%;
    }
    .goods-item-r {
        width: 68%;
        float: left;
    }
    .goods-item-r::after {
        content: '';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }
}
.goods-title {
    color: #333;
    font-size: 16px;
}
.goods-subtitle {
    color: #999;
    font-size: 12px;
}
.goods-params {
    margin-top: 20px;
    font-size: 12px;
    color: #999;
    float: right;
}
</style>