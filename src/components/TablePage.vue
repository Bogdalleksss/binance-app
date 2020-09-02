<template>
  <div class="table-page">
    <div class="symbol">{{ allSymbolInfo.name }}</div>

    <div class="table-wrapper">
        <table>
            <tr>
                <th>Amount</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            <tr v-for="(bid, index) in allSymbolInfo.bids" :key="index">
                <td>{{ (parseInt(bid[0] * 100)) / 100 }}</td>
                <td>{{ (parseInt(bid[1] * 100)) / 100 }}</td>
                <td>{{ (bid[0] * bid[1]).toFixed(2) }}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Amount</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            <tr v-for="(ask, index) in allSymbolInfo.asks" :key="index">
                <td>{{ (parseInt(ask[0] * 100)) / 100 }}</td>
                <td>{{ (parseInt(ask[1] * 100)) / 100 }}</td>
                <td>{{ (ask[0] * ask[1]).toFixed(2) }}</td>
            </tr>
        </table>
    </div>
     
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    name: 'tablePage',
    computed: mapGetters(['allSymbolInfo']),
}
</script>

<style>
.table-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

table {
    flex-basis: 45%;
    border: 1px solid #6b6b6b;
}

.table-wrapper {
    height: 80vh;
    width: 90%;
    display: flex;
    justify-content: space-around;
    overflow-y: scroll;
}

td, th {
    border: 1px solid #6b6b6b;
}

@media (max-width : 480px) {
    td:last-child, th:last-child {
        display: none;
    }
}

.symbol {
    flex-basis: 100%;
    margin: 20px;
    font-weight: 700;
}
</style>