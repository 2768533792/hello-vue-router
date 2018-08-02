<template>
    <div>
        <x-header :left-options="{showBack:false}">分类</x-header>
      <div class="category">
          <div class="cate-sidebar">
              <ul>
                  <li v-for="(item, index) in cates" :key="index">
                      {{item.first_cate}}
                  </li>
              </ul>
          </div>
          <div class="cate-content">
              <ul v-for="(item, index) in cates" :key="index">
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
            }
        ]
        }
    },
    methods: {

    }
}
</script>

