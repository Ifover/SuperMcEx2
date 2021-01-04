import Vue from 'vue'
import App from './App.vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

// Vue.use(Antd);
import './core/lazy_use'

console.log("=======Start-淦=======");

let id = 'super_mcex_2_0103'
let div = document.createElement('div')
div.setAttribute("id", id)
document.body.appendChild(div)
new Vue({
  el: `#${id}`,
  render: h => h(App)
})

console.log("========End-淦========");
