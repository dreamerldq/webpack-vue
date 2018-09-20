<template>
  <div class="container_header">
    <h1>子组件</h1>
    <img  :src="image"/>
    <input placeholder="你的名字"/>
  </div>
</template>

<script>
import img from 'images/1.jpeg';

export default {
  data() {
    return {
      image: img,
    };
  },
};
</script>

<style src="./index.scss" lang="scss">

</style>
