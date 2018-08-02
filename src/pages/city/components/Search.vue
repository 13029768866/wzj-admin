<template>
    <div>
    <div class="search">
        <input class="search_input" 
               type="text" 
               placeholder="输入城市名或拼音"
               v-model = 'keyword'
        >
    </div>
    <div class="search-con"
         ref = 'searchCon'
         v-show = 'keyword'
    >
            <ul>
                <li class="search_item border-bottom"
                    v-for='item of list'
                    :key = 'item.id'
                >{{item.name}}</li>
                 <li class="search_item border-bottom"
                     v-show = 'hasNoData'
                 >
                没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    watch: {
        keyword () {
            const res = []
            
            if(this.timer){
                clearTimeout(this.timer)
            }
            
            if(!this.keyword){
                this.list = []
                return
            }

            this.timer = setTimeout( () => {
                for(let i in this.cities){
                this.cities[i].forEach( (val) => {
                    if( val.spell.indexOf(this.keyword) > -1 ||
                        val.name.indexOf(this.keyword) > -1  ){
                        res.push(val)
                    }
                })
            }
                this.list = res
                },100)
            }
    },
     computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.searchCon)
    }
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
    .search-con
        position absolute
        overflow hidden
        top 1.58rem
        bottom 0
        left 0
        right 0
        background-color #eee
        z-index  10
        .search_item
            line-height 0.62rem
            padding-left 0.2rem
            background-color #fff
            color #666
</style>

