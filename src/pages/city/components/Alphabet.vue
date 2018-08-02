<template>
    <ul class="list">
        <li class="item" 
            v-for = 'item of words'
            :key = 'item'  
            :ref = 'item'
            @click = 'handleClick' 
            @touchstart = 'handleStart'
            @touchmove = 'handleMove'
            @touchend = 'handleEnd'        
        >{{item}}</li>        
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            starY: 0,
            timer: null
        }
    },
    computed: {
        words () {
            const words = []
            if(this.cities){
                for(let key in this.cities){
                    words.push(key)
                }
            }
            return words
        }
    },
    methods: {
        handleClick (e) {
            this.$emit('change',e.target.innerHTML)
        },
        handleStart () {
            this.touchStatus = true
        },
        handleMove (e) {
            console.log(e)
           if(this.touchStatus){
               if(this.timer){
                 clearTimeout(this.timer)
               }
            this.tierm = setTimeout( ()=>{
                const touchY = e.touches[0].clientY - 79
                console.log(touchY)
                const idx = Math.floor((touchY - this.starY) / 20)
                this.$emit('change',this.words[idx])
            },16)
           }
        },
        handleEnd () {
            this.touchStatus = false
        }
    },
    updated () {
        this.starY = this.$refs['A'][0].offsetTop
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/setting.styl'
@import '~styles/utils.styl'

.list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width 0.4rem
    .item    
        text-align center
        width 0.4rem
        height 0.4rem
        color $bgColor
        background-color #ccc
        border 1px solid #000
</style>

