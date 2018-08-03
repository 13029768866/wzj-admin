<template>
   <div class="list" ref='wrapper'>
        <div>
            <div class="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="btn_list">
                <div class="btn">{{this.$store.state.city}}</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">
                热门城市
            </div>
            <div class="btn_list">
                <div class="btn"
                     v-for = 'item of hot'
                     :key = 'item.id'
                     @click = 'handleHotClick(item.name)'
                >{{item.name}}</div>
            </div>
        </div>
        <div class="area"
             v-for = '(city,key) of cities'
             :key = 'key'
             :ref = "key"   
        >
            <div class="title border-topbottom">{{key}}</div>
            <div class="item_list">
                <div class="item border-bottom"
                     v-for = 'item of cities[key]'
                     :key = 'item.id' 
                     @click = 'handleHotClick(item.name)'
                >{{item.name}}</div>
                
            </div>         
        </div>
        </div>
   </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hot: Array,
        word: String
    },
    methods: {
        handleHotClick (city) {
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    watch: {
        word () {       
            const ele = this.$refs[this.word][0]
            this.scroll.scrollToElement(ele)
        }
    },
    mounted () {
        this.scroll  = new BScroll(this.$refs.wrapper)
    }


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
 .border-bottom
   &:before
     height 2px
     border-color: #ccc

 .list
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    .title 
        line-height 0.54rem
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
    .item_list
        .item
            line-height 0.76rem
            color #666
            padding-left 0.2rem
</style>

