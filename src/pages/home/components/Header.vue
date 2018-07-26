<template>
    <div class="head">
        <div class="head-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="head-search">
            <span class="iconfont">&#xe632;</span>
             输入城市/景点/游玩主题
        </div>     
        <div class="head-right">城市
            <span class="iconfont arrow-icon">&#xe61e;</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang='stylus' scoped>
@import '~styles/setting.styl';
    .head
     display flex
     align-items center
     height 0.86rem
     background-color $bgColor
     color #fff
     .head-left
      text-align center
      width 0.64rem
      .back-icon
       font-size 0.4rem
     .head-search
      display flex
      align-items center
      flex 1 
      height 0.64rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
     .head-right 
       display flex
       justify-content center
       align-items center
       width 1.24rem
       .arrow-icon
         font-size 0.3rem
</style>
 
