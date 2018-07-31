<template>
    <div class="search">
        <input class="search_input" type="text" placeholder="输入城市名或拼音">
        <div class="search-con">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/setting.styl'
  @import '~styles/utils.styl'
  .search
    height 0.72rem
    padding 0 0.1rem
    background-color $bgColor
    .search_input
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>

