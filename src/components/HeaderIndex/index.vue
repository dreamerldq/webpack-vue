<template>
  <div class="container_header">
    <h1>sub component</h1>
    <img  :src="image"/>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
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
