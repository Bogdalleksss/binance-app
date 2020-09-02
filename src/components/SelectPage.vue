<template>
  <div class="select-page">
    <select @change="onChange($event)">  
        <option v-for="(item, index) in options" :selected="item === allSymbolInfo.name" :key="index">{{ item }}</option>
    </select>

    <ul>
        <li>Price change: {{allSymbolInfo.info.priceChange}}</li>
        <li>Price change percent: {{allSymbolInfo.info.priceChangePercent}}</li>
        <li>Last price: {{allSymbolInfo.info.lastPrice}}</li>
        <li>Bid price: {{allSymbolInfo.info.bidPrice}}</li>
        <li>Ask price: {{allSymbolInfo.info.askPrice}}</li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'selectPage',
    computed: mapGetters(['options', 'allSymbolInfo']),
    methods: {
        ...mapActions(['getData']),
        onChange(event) {
            this.getData(event.target.value)
        }
    },
}
</script>

<style>
select {
    margin: 20px;
    width: 150px;
    height: 30px;
    background: transparent;
    cursor: pointer;
}

li {
    list-style: none;
}
</style>