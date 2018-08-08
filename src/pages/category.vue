<template>
    <div>
        <x-header :left-options="{showBack:false}">分类</x-header>
      <div class="category">
          <div class="cate-sidebar">
              <ul>
                  <li v-for="(item, index) in cates" :key="index">
                      <a href="javascript:void(0);" @click="showChild('#child-'+index)">{{item.first_cate}}</a>
                  </li>
              </ul>
          </div>
          <div class="cate-content">
              <ul :id="'child-'+index" v-for="(item, index) in cates" :key="index">
                  <li class="cate-items-title">{{item.first_cate}}</li>
                  <li v-for="(subitem, index) in item.second_cate" :key="index">
                      {{subitem}}
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            cates: [
            {
                first_cate: '女装',
                second_cate: ['T恤','连衣裙','萝卜裤','牛仔裤']
            },
            {
                first_cate: '男装',
                second_cate: ['休闲裤','polo衫','萝卜裤','牛仔裤']
            },
            {
                first_cate: '童装',
                second_cate: ['卫衣','套装','连体衣','亲子装']
            },
            {
                first_cate: '老年装',
                second_cate: ['卫衣','套装','连体衣','亲子装']
            },
            {
                first_cate: '夏季',
                second_cate: ['卫衣','套装','连体衣','亲子装']
            },
            {
                first_cate: '冬装',
                second_cate: ['卫衣','套装','连体衣','亲子装']
            },
            {
                first_cate: '礼服',
                second_cate: ['卫衣','套装','连体衣','亲子装']
            }
        ]
        }
    },
    methods: {
        showChild(parent){
            console.log(parent)
            var child = this.$el.querySelector(parent)
            console.log(child);
            child.css('top', 0);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
