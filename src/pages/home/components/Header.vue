<template>
    <div class="head">
        <div class="head_left">
            <i class="iconfont back_icon">&#xe624;</i>
        </div>
        <div class="head_search">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
        <div class="head_right">
            {{this.city}}
            <i class="iconfont arrow_icon">&#xe61e;</i>
        </div>
       </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHead',
    computed: {
        ...mapState(['city'])
    }
}
</script>
<style lang='stylus' scpoed>
@import '~styles/setting.styl'

  .head
    display flex
    align-items center
    height 0.86rem
    background-color $bgColor
    color #fff
    .head_left
      width 0.64rem
      text-align center
      .back_icon
        font-size 0.4rem 
    .head_search
      display flex
      align-items center
      flex  1
      height 0.64rem
      margin-left 0.2rem
      padding-left 0.15rem
      border-radius .1rem
      background-color #fff
      color #ccc
    .head_right
      display flex
      justify-content center
      min-width 1.04rem
      padding 0.1rem
      color #fff
      .arrow_icon
        font-size 0.3rem
</style>
