<template>
    <div class="occupied">
        <swiper :options="swiperOption">
            <swiper-slide
                v-for = '(page,index) of pages'
                :key = 'index'
            >
                <div class="icons"
                     v-for = 'item of page'
                     :key = 'item.id'
                >
                    <img class="icon_img" :src="item.imgUrl" alt="">
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>  
        </swiper>
        
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    props: {
        iconList: Array
    },
    data () {
        return {
            swiperOption: {

            },
            
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) =>{
                let page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang='stylus' scoped>
.occupied
    height 3.7rem
    margin-top 0.1rem
    .swiper-slide
      display flex
      flex-wrap wrap
    .icons
        display flex
        flex-direction column
        align-items center
        width 25vw
        height 1.8rem
        .icon_img
            width 1.1rem
            height 1.1rem
            margin-top 0.1rem
            margin-bottom 0.1rem
</style>

