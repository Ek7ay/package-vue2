import Vue from "vue"
import Loading from "./index.vue"

const loadingDirective = {
  inserted: (el, binding) => {
    const loadingCtor = Vue.extend(Loading)
    const loadingComp = new loadingCtor().$mount()
    el.instance = loadingComp   // 先把loading的组件实例存储到元素上

    if (binding.value) {
      append(el)
    }
  },

  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

const append = (el) => {
  el.appendChild(el.instance.$el)
}

const remove = (el) => {
  el.removeChild(el.instance.$el)
}

export default loadingDirective