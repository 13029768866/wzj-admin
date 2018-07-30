<template>
   <div class="list">
        <div class="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="btn_list">
                <div class="btn">北京</div>
                <div class="btn">北京</div>
                <div class="btn">北京</div>
                <div class="btn">北京</div>
                <div class="btn">北京</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">
                热门城市
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
        </div>
   </div>
</template>
<script>
export default {
    name: 'CityList',

}
</script>
<style lang="stylus" scoped>
@import '~styles/setting.styl'
@import '~styles/utils.styl'
 .border-topbottom
   &:before
     border-color: #ccc
   &:after
     border-color #ccc
 .title 
  line-height 0.44rem
  background-color #eee
  color #666
  padding-left 0.2rem
  font-size 0.26rem
 .btn_list
   display flex
   flex-wrap wrap
   padding 0.1rem .35rem .1rem .1rem
   .btn
    width 30%
    margin: .1rem
    padding: .1rem 0
    border 1px solid #000
    text-align center      
    border: .02rem solid #ccc
    border-radius: .06rem 
</style>

