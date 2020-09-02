import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async getData(context, symbol) {
            let data = {
                name: symbol,
                payload : [],
                info : {}
            };
            await axios.get(`https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=500`)
                    .then(res => data.payload = res.data)
                    .catch(err => console.log(err))

            await axios.get(`https://www.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
                    .then(res => data.info = res.data)
                    .catch(err => console.log(err))

            context.commit('updateData', data)
        },
    },
    mutations: {
        updateData(state, data) {
            state.symbolInfo.name = data.name
            state.symbolInfo.bids = data.payload.bids
            state.symbolInfo.asks = data.payload.asks
            state.symbolInfo.info = data.info
        }
    },
    state: {
        symbolInfo: {
            name: 'BTCUSDT',
            info: {},
            bids: [],
            asks: []                
        },
        options: ['BTCUSDT', 'BNBBTC', 'ETHBTC']
    },
    getters: {
        allSymbolInfo(state) {
            return state.symbolInfo
            
        },
        options(state) {
            return state.options
        }
    }
})