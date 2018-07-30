<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
          <li class="item border-bottom"
              v-for = 'item of recommendList'
              :key  = 'item.id'
          >
              <div class="img_occupied">
                  <img class="item_img" 
                       :src="item.imgUrl"
                  >
              </div>
              <div class="item_info">
                  <p class="item_title">{{item.title}}</p>
                  <p class="item_desc">{{item.desc}}</p>
                  <button class="item_btn">查看详情</button>
              </div>
          </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommendList: Array
    },
    data () {
        return {
         
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~styles/utils.styl'

.title
    line-height 0.8rem
    margin-top 0.2rem
    background #eee
    text-indent 0.2rem
.item
    display flex
    padding 0.2rem
    .img_occupied
        width 2rem
        height 2rem
        .item_img
            width 100%
    .item_info
        flex 1
        margin-left 0.22rem
        min-width 0
        .item_title
            margin-top 0.2rem
            line-height 0.54rem
            font-size 0.32rem
            ell()
        .item_desc
            line-height 0.4rem
            margin-top 0.1rem
            margin-bottom 0.18rem
            color #ccc
            ell()
        .item_btn
            line-height 0.44rem
            font-size 0.16rem
            background #ff9300
            padding 0 0.2rem
            border-radius 0.06rem
            color #fff
</style>

