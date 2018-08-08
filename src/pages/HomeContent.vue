<template>
    <div>
        <x-header :left-options="{showBack:false}">首页</x-header>
        <swiper class="banner" dots-position="center">
            <swiper-item class="banner-item" v-for="(item, index) in bannerList" :key="index">
                <img :src="item" />
            </swiper-item>
        </swiper>
        <index-floor1 :floorTitle="floor1.floorTitle" :floorData="floor1.floorImages"></index-floor1>
        <index-floor2 :floorTitle="floor2.floorTitle" :floorData="floor2.floorImages"></index-floor2>
        <index-floor3 :floorTitle="floor3.floorTitle" :floorData="floor3.floorGoods"></index-floor3>

    </div>
</template>
<script>
import IndexFloor1 from '@/components/IndexFloor1'
import IndexFloor2 from '@/components/IndexFloor2'
import IndexFloor3 from '@/components/IndexFloor3'
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
            floor1: {
                floorTitle: '最新产品',
                floorImages: [
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
            },
            floor2: {
                floorTitle: '时尚新品',
                floorImages: [
                    {
                        href: 'http://www.google.com',
                        image: require('@/assets/img/indexfloor-img2.jpg')
                    },
                    {
                        href: 'http://www.none.com',
                        image: require('@/assets/img/indexfloor-img3.jpg')
                    },
                    {
                        href: 'http://www.baidu.com',
                        image: require('@/assets/img/indexfloor-img1.jpg')
                    },
                ]
            },
            floor3: {
                floorTitle: '热门推荐',
                floorGoods: [
                    {
                        src: require('@/assets/img/indexfloor-img1.jpg'),
                        title: '时尚夏季连衣裙',
                        subtitle: '杨幂同款',
                        price: '100'
                    },
                    {
                        src: require('@/assets/img/indexfloor-img1.jpg'),
                        title: '时尚夏季连衣裙',
                        subtitle: '杨幂同款',
                        price: '100'
                    },
                    {
                        src: require('@/assets/img/indexfloor-img1.jpg'),
                        title: '时尚夏季连衣裙',
                        subtitle: '杨幂同款',
                        price: '100'
                    }
                ]
            }
            
        }
    },
    components: {
        IndexFloor1,
        IndexFloor2,
        IndexFloor3

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

