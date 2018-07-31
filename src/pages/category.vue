<template>
    <div>
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
<style scoped>
.category::after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
.cate-sidebar {
    background: #eee;
    border-right: 1px solid #ccc;
    width: 20%;
    float: left;
}
.cate-sidebar ul li {
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    /* margin-bottom: 5px; */
    height: 60px;
    padding: 0 5px;
}
.cate-content {
    background: #fff;
    width: 72%;
    float: left;
    padding: 2%;
}
.cate-content li {
    list-style: none;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
}
</style>

<script>
import {XHeader} from 'vux'
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
    components: {
        XHeader
    }
}
</script>

