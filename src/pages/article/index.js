import Vue from 'vue';
import HeaderIndex from './HeaderIndex.vue';

new Vue({
  el: '#app',
  components: {
    'index-header': HeaderIndex,
  },
  created() {
    console.log('AAA');
  },
});
