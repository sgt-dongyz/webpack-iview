import Vue from 'vue'
import App from './components/App.vue'
import iView from 'iview';
import { Button, Notice, Collapse,Panel } from 'iview';
Vue.component('Button', Button);
Vue.component('Collapse', Collapse);
Vue.component('Panel', Panel);
Vue.prototype.$Notice = Notice //需全局注册
import 'iview/dist/styles/iview.css';

new Vue({
  el: '#app',
  render: h => h(App)
})