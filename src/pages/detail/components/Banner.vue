<template>
      <div>
        <div class="occupied" @click = 'handleBannerClick'>
            <img class="banner_img"
            src= "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
            <div class="banner_info">
            <div class="banner_title">大连圣亚海洋世界(AAAA景区)</div>
            <div>
                <span class="iconfont icon-sousuo banner_num">39</span>
            </div>
            </div>
        </div>
        <common-gallery :imgs = 'imgs'
                        v-show = 'showGallery'
                        @close = 'handleGalleryChange'
        ></common-gallery>
      </div>

</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryChange () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>
<style lang = 'stylus' scoped>
@import '~styles/varible.styl'
@import '~styles/util.styl'

    .occupied
        position relative
        width 100vw
        height 55vw
        .banner_img
            width 100%
        .banner_info
            display flex
            align-items center
            position absolute
            bottom 0
            left 0
            right 0
            line-height 0.6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0,),rgba(0,0,0,0.8))
            .banner_title
                flex 1
                font-size 0.32rem
                padding 0 .2rem
            .banner_num
                padding 0.1rem .4rem
                line-height 0.32rem
                font-size 0.24rem
                border-radius .2rem
                background-color rgba(0,0,0,.8)
</style>
