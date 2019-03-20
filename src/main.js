import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
 

new Vue({
  el: '#app',
  render: h => h(App)
})


// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.info = response))
//   }
// })