<template>
    <div>
        <x-header :left-options="{showBack:false}">首页</x-header>
        <swiper class="banner" dots-position="center">
            <swiper-item class="banner-item" v-for="(item, index) in bannerList" :key="index">
                <img :src="item" />
            </swiper-item>
            </swiper>
            <div class="indexfloor1">
            <div class="indexfloor1-hd">店长推荐</div>
            <div class="indexfloor1-bd clearfix">
                <div class="indexfloor1-bd-fl indexfloor1-con1">
                <a href="#" ><img :src="indexFloorImgs.img1" /></a>
                </div>
                <div class="indexfloor1-bd-fr">
                <div class="indexfloor1-con2">
                    <a href="#"><img :src="indexFloorImgs.img2" /></a>
                </div>
                <div class="indexfloor1-con3">
                    <a href="#"><img :src="indexFloorImgs.img3" /></a>
                </div>
                </div>
            </div>
            </div>
            <div class="indexfloor1">
            <div class="indexfloor1-hd">新款上市</div>
            <div class="indexfloor1-bd clearfix">
                <div class="indexfloor1-bd-fr">
                <div class="indexfloor1-con2">
                    <a href="#"><img :src="indexFloorImgs.img2" /></a>
                </div>
                <div class="indexfloor1-con3">
                    <a href="#"><img :src="indexFloorImgs.img3" /></a>
                </div>
                </div>
                <div class="indexfloor1-bd-fl indexfloor1-con1">
                <a href="#" ><img :src="indexFloorImgs.img1" /></a>
                </div>
            </div>
            </div>
            <div class="indexfloor2">
            <div class="indexfloor2-hd">热门推荐</div>
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
    </div>
</template>
<script>
const bannerList = [
  require('@/assets/img/ban_img1.jpg'),
  require('@/assets/img/ban_img2.jpg'),
  require('@/assets/img/ban_img3.jpg')
];
export default {
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        bannerList: bannerList,
        indexFloorImgs: {
            img1: require('@/assets/img/indexfloor-img1.jpg'),
            img2: require('@/assets/img/indexfloor-img2.jpg'),
            img3: require('@/assets/img/indexfloor-img3.jpg')
        }
        }
    },
    components: {
    }
}
</script>
