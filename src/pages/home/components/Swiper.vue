<template>
    <div class="occupied">
      <swiper :options="swiperOption"
                v-if='showSwiper'>
        <swiper-slide 
            v-for = 'item of swiperList'
            :key =  'item.id'
        >
            <img class="swiper_img" :src="item.imgUrl" alt="">
        </swiper-slide>  
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div> 
</template>
<script>
export default {
    name: 'HomeSwiper',
    props:{
        swiperList: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                aotuplay: true
            }   
        }
    },
    computed: {
        showSwiper () {
          return  this.swiperList.length
        }
    }
}
</script>
<style lang='stylus' scoped>
/deep/ .swiper-pagination-bullet-active
    background-color #fff
.occupied
    width 100vw
    height 31.25vw
    background-color #eee
    .swiper_img
        width 100%
        height 100%
</style>
