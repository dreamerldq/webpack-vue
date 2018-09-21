import Vue from 'vue';
import { Button, Input } from 'element-ui';
import App from './index.vue';

Vue.use(Button);
Vue.use(Input);
new Vue({
  el: '#app',
  render: h => h(App),
});
