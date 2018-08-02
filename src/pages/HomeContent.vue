<template>
    <div>
        <x-header :left-options="{showBack:false}">首页</x-header>
        <swiper class="banner" dots-position="center">
            <swiper-item class="banner-item" v-for="(item, index) in bannerList" :key="index">
                <img :src="item" />
            </swiper-item>
        </swiper>
        <index-floor1 :floorTitle="floorTitle" :floorData="floor1"></index-floor1>
    </div>
</template>
<script>
import IndexFloor1 from '@/components/IndexFloor1'
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
            floorTitle: '最新产品',
            floor1: [
                {
                    href: 'http://www.baidu.com',
                    image: require('@/assets/img/indexfloor-img1.jpg')
                },
                {
                    href: 'http://www.google.com',
                    image: require('@/assets/img/indexfloor-img2.jpg')
                },
                {
                    href: 'http://www.none.com',
                    image: require('@/assets/img/indexfloor-img3.jpg')
                }
            ]
        }
    },
    components: {
        IndexFloor1
    }
}
</script>

<style lang="scss" scoped>
.banner-item img {
    width: 100%;
}
.indexfloor1 {
    margin-top: 20px;
    .indexfloor1-hd {
        height: .8rem;
        line-height: .8rem;
        font-size: 18px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    .indexfloor1-bd-fl {
        float: left;
        width: 40%;
    }
    .indexfloor1-bd-fr {
        float: left;
        width: 60%;
    }
    img {
        width: 100%;
    }
}
/* 商品列表 */
.indexfloor2 {
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

