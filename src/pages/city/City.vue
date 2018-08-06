<template>
    <div>
        <city-head></city-head>
        <city-search :cities = 'cities'>
        </city-search>
        <city-list
                :cities = 'cities'
                :hot = 'hotCities'
                :word = 'word'
        ></city-list>
        <city-alphabet 
                :cities = 'cities'
                @change = 'handleChange'
        >

        </city-alphabet>
    </div> 
</template>
<script>
import axios from 'axios'
import CityHead from './components/Head'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

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
            cities:{},
            hotCities: [],
            word: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data 
            if(res.ret && res.data) {
                const data = res.data 
                console.log(data)
                this.cities =data.cities
                this.hotCities = data.hotCities
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
