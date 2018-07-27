<template>
   <div class="occupied">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key='item.id'>
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>       
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
   </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
      return {
          swiperOption: {
              pagination: '.swiper-pagination',
              loop: true
          },
          swiperList: [
              {
                  id: '0001',
                  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/12/a100ed94e5ea3102.jpg_750x200_03956e08.jpg'
              },
              {
                  id: '0002',
                  imgUrl:  'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
              }
              
             
          ]
      }
  }   
}
</script>
<style lang='stylus' scoped>
.occupied >>> .swiper-pagination-bullet-active
  background-color #fff
.occupied
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background-color #eee
    .swiper-img
        width 100%
</style>
