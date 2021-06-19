// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/style.sass'
import './style/style.css'
import './style/style.styl'
import plugins from './components/index'
import './iconfont/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import Global from './global/global'

Vue.prototype.global=Global
Vue.use(Vant);
//vconsole控制台
import VConsole from 'vconsole/dist/vconsole.min.js'
let vConsole = new VConsole() // 初始化
Vue.use(plugins);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
