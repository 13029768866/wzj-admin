<template>
    <div>
        <city-head></city-head>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>
<script>
import CityHead from './components/Head'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
    name: 'City',
    components:{
        CityHead,
        CitySearch,
        CityList
    }
}
</script>
<style lang="stylus" scoped>

</style>
