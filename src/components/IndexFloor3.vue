<template>
    <div class="indexfloor3">
        <div class="indexfloor3-hd">热门推荐</div>
        <div class="goods-list">
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
            <div class="goods-item clearfix">
            <div class="goods-item-l">
                <img :src="indexFloorImgs.img1">
            </div>
            <div class="goods-item-r">
                <div class="goods-title">2018新款夏季连衣裙</div>
                <div class="goods-subtitle">杨幂同款爆款库存不多抓紧赶快</div>
                <div class="goods-params">销量：100+</div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
/* 商品列表 */
.indexfloor3 {
    width: 94%;
    margin: 0 auto;
    .indexfloor2-hd {
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