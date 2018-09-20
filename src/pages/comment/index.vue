<template>
<div class="container">
  <h1 >{{name}}</h1>

</div>
</template>

<script>
const promise1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});
const async1 = async () => {
  const time = await promise1();
  console.log('完成异步花费时间', time);
};
export default {
  data() {
    return {
      name: 'lidanqiu',
    };
  },
  created() {
    async1();
  },
};
</script>
<style src="./index.scss" lang="scss">

</style>
