<template>
    <div>
        <home-head></home-head>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>
<script>
import HomeHead from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
      HomeHead,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  }
}
</script>
<style>

</style>


