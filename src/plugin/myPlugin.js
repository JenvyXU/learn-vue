module.exports = {
  install(Vue) {

    Vue.mixin({
      data() {
        return {
          mixinValue: 'mixin'
        }
      }
    })

    Vue.directive('pin',{
      bind(el, binding) {
        el.style.position = 'fixed'
        el.style[binding.arg] = binding.value + 'px'
      }
    })

    Vue.globalMethod = () => {
      console.log('this is global method')
    }

    Vue.prototype.$myProperty = 'my property'
  }
}