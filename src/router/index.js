import Vue from 'vue'
import Router from 'vue-router'

import TablePage from '../components/TablePage.vue'
import SelectPage from '../components/SelectPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'table',
            component: TablePage
        },
        {
            path: '/select',
            name: 'select',
            component: SelectPage
        }
    ]
})