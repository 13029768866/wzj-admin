<template>
    <div>
        <router-link class="header_abs"
                     tag="div"
                     to = '/'
                     v-show="isShow"
        >
            <i class="iconfont icon-fanhui icon_back"></i>
        </router-link>
        <div class="header_fixed"
             v-show="!isShow"
             :style = 'opacityStyle'
        >景点详情
            <router-link class="icon_back iconfont icon-fanhui"
                         tag = 'i'
                         to = '/'
            ></router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      //   获取文档滚动高度
      console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        //   当top>140是对opacity进行限制
        opacity = opacity > 1 ? 1 : opacity
        // 解构赋值给opacityStyle
        this.opacityStyle = { opacity }
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  activated () {
    // 因为使用keep-alive必须使用activated钩子，监听原生scroll事件，触发对应方法
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang = 'stylus' scoped>
@import '~styles/varible.styl'
@import '~styles/util.styl'

.header_abs
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    line-height 0.8rem
    text-align center
    border-radius .4rem
    background-color rgba(0,0,0,8)
    .icon_back
        font-size 0.4rem
        color #fff
.header_fixed
    common_head()
    position fixed
    top 0
    left 0
    right 0
    z-index  10
    background-color $BaseColor
    color $TextColor
    .icon_back
      min-width 0.4rem
      padding 0 .2rem
      position absolute
      font-size 0.4rem
      left 0
</style>
