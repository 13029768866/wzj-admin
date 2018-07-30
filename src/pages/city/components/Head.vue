<template>
    <div class="head">
         <router-link to='/'>
            <div class="head_left">
                <i class="iconfont back_icon">&#xe624;</i>
            </div>
         </router-link>
          城市选择  
    </div>
</template>
<script>
export default {
    name: 'CityHead'
}
</script>
<style lang="stylus" scoped>
@import '~styles/setting.styl'
@import '~styles/utils.styl'
    .head
      position relative
      head_color()
      .head_left
        position absolute
        top 0
        left 0
        width 0.64rem
        margin-left 0.15rem       
        .back_icon
          color #fff
          font-size 0.4rem
        
</style>
