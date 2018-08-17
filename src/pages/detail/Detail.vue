<template>
    <div class="occupied">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang = 'stylus' scoped>
@import '~styles/varible.styl'
@import '~styles/util.styl'
.occupied
  height 50rem
</style>
