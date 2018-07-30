<template>
    <ul class="list">
        <li class="item"
            v-for = 'item of words'
            :key = 'item'
            :ref = 'item'
            @click = 'handleClick'
            @touchstart = 'handleTouchStart'
            @touchmove = 'handleTouchMove'
            @touchend = 'handleTouchEnd'
        >{{item}}</li>        
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props:{
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            starY:0,
            timer: null
        }
    },
    updated () {
        this.starY = this.$refs['A'][0].offsetTop
    },
    computed: {
       words () {
            const words = []
            for (let i in this.cities) {
                words.push(i)
            }
            return words
       }
    },
    methods:{
        handleClick (e) {
            this.$emit('change',e.target.innerHTML)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 79
                const idx = Math.floor((touchY - this.starY) / 20)
                if (idx >=0 && idx < this.words.length) {
                     this.$emit('change',this.words[idx])
                 }
                }, 16);
            }
           
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
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

