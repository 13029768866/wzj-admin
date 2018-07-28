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
    data () {
        return {
            swiperOption: {

            },
            iconList: [
                {
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
                },
                 {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
                },
                 {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '杭州必游'
                },
                 {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                desc: '漂流'
                },
                 {
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                desc: '夏日玩水'
                },
                 {
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc: '西湖'
                },
                 {
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc: '宋城千古情'
                },
                 {
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                desc: '汽车票'
                },
                 {
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                desc: '千岛湖'
                },
                 {
                id: '0010',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                desc: '全部玩乐'
                }
            ]
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
        height 1.5rem
        .icon_img
            width 1.1rem
            height 1.1rem
            margin-top 0.1rem
            margin-bottom 0.1rem
</style>

