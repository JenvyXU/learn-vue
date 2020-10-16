import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugin/myPlugin';

Vue.config.productionTip = false

Vue.mixin({
  created() {
    console.log('mixin')
  }
})

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

// Vue.directive('pin', {
//   bind(el, binding) {
//     el.style.position = 'fixed'
//     el.style[binding.arg] = binding.value + 'px'
//   }
// })

Vue.filter('addUnit', function(value) {
    return '$' + value
  }
)

Vue.filter('exchange',function(account, unit, multiple) {
  console.log(account)
  let val = parseFloat(account.slice(1), 10)
  console.log(val)
  let newVal = val * multiple
  return unit + newVal
})

Vue.use(myPlugin)

var sss = new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(sss)