<template>
    <div>
        <city-head></city-head>
        <city-search></city-search>
        <city-list
            :cities = 'cities'
            :hot = 'hotCities'
            :word  = 'word'
        ></city-list>
        <city-alphabet 
            :cities = 'cities'         
            @change = 'handleChange'
        >

        </city-alphabet>
    </div>
</template>
<script>
import CityHead from './components/Head'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name: 'City',
    components:{
        CityHead,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            word: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            console.log(res)
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities =data.hotCities
            }
        },
        handleChange (word) {
            this.word = word
        }

    },
    mounted () {
        this.getCityInfo()
    }


    

}
</script>
<style lang="stylus" scoped>

</style>
