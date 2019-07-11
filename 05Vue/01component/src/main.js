import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 总线模式
// 给Vue的原型添加一个$bus属性，它指向一个新的Vue实例，它只用于组件间的数据传递
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
