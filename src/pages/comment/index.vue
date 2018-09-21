<template>
<div class="container">
  <h1 >{{name}}</h1>
  <header-index></header-index>
</div>
</template>

<script>
import HeaderIndex from 'components/HeaderIndex';
import { get_xxx1 } from 'services/page_1';


const promise1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});
const async1 = async () => {
  const time = await promise1();
  console.log(time);
};
export default {
  data() {
    return {
      name: 'miingzi',
    };
  },
  components: {
    HeaderIndex,
  },
  created() {
    async1();
  },
  mounted() {
    get_xxx1({ phone: '17615160540' })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
};
</script>
<style src="./index.scss" lang="scss">

</style>
