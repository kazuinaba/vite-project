<script setup>
import Login from './components/pages/Login.vue';
import SignUp from './components/pages/SignUp.vue'; // ここを追加
</script>

<template>
  <router-view /> <!-- 変更 -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>