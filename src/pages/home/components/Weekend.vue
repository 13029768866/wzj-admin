<template>
    <div>
        <div class="title">
            周末去哪游
        </div>
        <ul>
          <li class="item border-bottom"
              v-for = 'item of weekendList'
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
              </div>
          </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: 'HomeWeekend',
    props: {
      weekendList: Array
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
    margin-bottom 0.1rem
    .img_occupied
      height 37vw
      .item_img
        width 100%
        height 100%
    .item_info
      padding .14rem .2rem .2rem .2rem
      min-width 0
      .item_title
        weekend_title()
        ell()
      .item_desc
        weekend_desc()
        ell()
    
</style>

