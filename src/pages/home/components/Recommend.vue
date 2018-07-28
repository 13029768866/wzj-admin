<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
          <li class="item border-bottom"
              v-for = 'item of recommendList'
              :key  = 'item.id'
          >
              <div class="img_occupied">
                  <img class="item_img" 
                       :src="item.imgUrl"
                  >
              </div>
              <div class="item_info">
                  <p class="item_title">{{item.title}}</p>
                  <p class="item_desc">{{item.desc}}</p>
                  <button class="item_btn">查看详情</button>
              </div>
          </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
        "title": "故宫",
        "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_150x150_da975344.jpg",
        "title": "杭州野生动物世界",
        "desc": "有发福蝶，大脑斧"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
        "title": "天安门广场",
        "desc": "我爱北京天安门，天安门上太阳升"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
        "title": "水立方",
        "desc": "中国的荣耀，阳光下的晶莹水滴"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
        "title": "温都水城养生馆",
        "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
      }]
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~styles/utils.styl'

.title
    line-height 0.8rem
    margin-top 0.2rem
    background #eee
    text-indent 0.2rem
.item
    display flex
    padding 0.2rem
    .img_occupied
        width 2rem
        height 2rem
        .item_img
            width 100%
    .item_info
        flex 1
        margin-left 0.22rem
        min-width 0
        .item_title
            margin-top 0.2rem
            line-height 0.54rem
            font-size 0.32rem
            ell()
        .item_desc
            line-height 0.4rem
            margin-top 0.1rem
            margin-bottom 0.18rem
            color #ccc
            ell()
        .item_btn
            line-height 0.44rem
            font-size 0.16rem
            background #ff9300
            padding 0 0.2rem
            border-radius 0.06rem
            color #fff
</style>

