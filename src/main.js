import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/normalize.css'

import { NavBar, Tabbar, TabbarItem, Tab, Tabs, Icon, Swipe, SwipeItem, Lazyload } from 'vant';

Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload);



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')